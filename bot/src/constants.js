import * as dotenv from 'dotenv';
dotenv.config({path : `./config/${process.env.NODE_ENV}/.env`});
import { ethers } from "ethers";
import { FlashbotsBundleProvider } from "@flashbots/ethers-provider-bundle";

var wssProvider;
var flashbotsBundleProvider;

export const getWSSProvider = () => {

    if (wssProvider!= null) {
        return wssProvider;
    } 

    if(process.env.NODE_ENV == "mainnet") {
        if (process.env.PROVIDER_TYPE == "infura") {

            wssProvider = new ethers.providers.WebSocketProvider(
                process.env.INFURA_WSS_URL + process.env.INFURA_KEY
            );

        } else if (process.env.PROVIDER_TYPE == "local"){
            wssProvider = new ethers.providers.WebSocketProvider(
                process.env.RPC_URL_WSS
            );
            
        } else {
            wssProvider = new ethers.providers.WebSocketProvider(
                process.env.INFURA_WSS_URL + process.env.INFURA_KEY
            );
        }
    } else {
        wssProvider = new ethers.providers.WebSocketProvider(
            process.env.INFURA_WSS_URL + process.env.INFURA_KEY
        );
    }

    return wssProvider;
}

export const getFlashbotsBundleProvider = async ( wallet ) => {

    if(process.env.NODE_ENV == "mainnet") {

        flashbotsBundleProvider = await FlashbotsBundleProvider.create(
            wssProvider,
            wallet
        );

    } else {

        flashbotsBundleProvider = await FlashbotsBundleProvider.create(
            wssProvider,
            wallet,
            "https://relay-goerli.flashbots.net",
            "goerli"
        );

    }

    return flashbotsBundleProvider;
}



