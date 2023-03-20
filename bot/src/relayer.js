import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { ethers } from "ethers";
import fetch from "node-fetch";
const Common = require("@ethereumjs/common").default;
const {
  FeeMarketEIP1559Transaction,
  AccessListEIP2930Transaction,
  Transaction,
} = require("@ethereumjs/tx");
import { stringifyBN, toRpcHexString } from "./utils.js";
import { victWallet } from "../index.js";

const {
  FlashbotsBundleProvider,
} = require("@flashbots/ethers-provider-bundle");

let _fbId = 1;


export const fbRequest = async (url, method, params) => {
  const body = JSON.stringify({
    method: method,
    params: params,
    id: _fbId++,
    jsonrpc: "2.0",
  });

  const signature = await victWallet.signMessage(ethers.utils.id(body));
  const headers = {
    "X-Flashbots-Signature": `${victWallet.address}:${signature}`,
    "Content-Type": "application/json",
  };

  const resp = await fetch(url, {
    method: "POST",
    headers,
    body,
  }).then((x) => x.json());

  return resp;
};

export const sendBundleFlashbots = async (signedTxs, targetBlockNumber) => {
  const params = [
    {
      txs: signedTxs,
      blockNumber: toRpcHexString(
        ethers.BigNumber.from(targetBlockNumber.toString())
      ),
      minTimestamp: 0,
      maxTimestamp: parseInt((new Date().getTime() / 1000).toString()) + 120,
      revertingTxHashes: [],
    },
  ];

  if (process.env.NODE_ENV == "mainnet") {
    const resp = await fbRequest(
      "https://relay.flashbots.net",
      "eth_sendBundle",
      params
    );
    return resp.result;
  } else {
    const resp = await fbRequest(
      "https://relay-goerli.flashbots.net",
      "eth_sendBundle",
      params
    );
    return resp.result;
  }
};

export const getRawTransaction = (tx) => {
  let raw;
  let txData = stringifyBN(tx, true);

  const common = new Common({ chain: process.env.NODE_ENV, hardfork: "london" });

  if (tx.type === null || tx.type === 0) {
    raw =
      "0x" +
      Transaction.fromTxData(txData, { common }).serialize().toString("hex");
  } else if (tx.type === 1) {
    raw =
      "0x" +
      AccessListEIP2930Transaction.fromTxData(txData, { common })
        .serialize()
        .toString("hex");
  } else if (tx.type === 2) {
    raw =
      "0x" +
      FeeMarketEIP1559Transaction.fromTxData(txData, { common })
        .serialize()
        .toString("hex");
  } else {
    throw new Error("Invalid tx type");
  }

  if (ethers.utils.keccak256(raw) !== tx.hash) {
    throw new Error("Invalid tx signature");
  }

  return raw;
};

export const sendBundleFlashbotsV2 = async ( wssProvider,wallet,txs,targetBlockNumber) => {
  var minTimestamp = 0;
  var maxTimestamp = parseInt((new Date().getTime() / 1000).toString()) + 60
  var revertingTxHashes = []
  var flashbotsProvider;

  var paraContainer = [];

  txs.forEach(element => {

    var map = {signedTransaction: element};
    paraContainer.push(map);

  });

  if (process.env.NODE_ENV == "mainnet") {
    flashbotsProvider = await FlashbotsBundleProvider.create(
      wssProvider,
      wallet
    );
  } else {
    flashbotsProvider = await FlashbotsBundleProvider.create(
      wssProvider,
      wallet,
      "https://relay-goerli.flashbots.net",
      "goerli"
    );
  }

  const signedBundle = await flashbotsProvider.signBundle(paraContainer);

  const bundleReceipt = await flashbotsProvider.sendRawBundle(
    signedBundle,
    targetBlockNumber,
    minTimestamp,
    maxTimestamp,
    revertingTxHashes
  );
  

  const bundleStats = await flashbotsProvider.getBundleStats(bundleReceipt.bundleHash,targetBlockNumber);
  
  return {bundleReceipt,bundleStats};
  
};






