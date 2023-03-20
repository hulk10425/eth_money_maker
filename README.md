( English Below) 


-- 緣由 --

以太坊開發框架很多 hardhat、truffle 等等,
幾乎所有框架都有提供10 - 20組預設帳號供開發者使用，
但是經過觀察有些粗心的開發者，會不小心在主網將eth 轉進這些預設帳號內，
這時候就是利基發生的地方，因為這些預設帳號的私鑰是公開的
所以當你偵測到有這個狀況，透過flashbots 你甚至可以在同一個Block就將eth再轉回你的錢包

以hardhat提供的第一組預設帳號為例
https://etherscan.io/address/0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

幾乎每3天都會有粗心鬼不小心把錢轉進去 ：）
此程式提供偵測 + flashbots transfer

-- 設定 --

需先設定三環境變數 
HACKER_ADDRESS = "Your wallet's address"
HACKER_KEY = "Your wallet's private key"
INFURA_KEY = "INFURA_KEY"

根據launch.json 可以決定
1.Mainnet or Goerli
2.Infura or Local node

-- 注意事項 --

1.建議使用vscode 當作開發IDE
2.建議使用 local node 當作provider

-- 接下來更新 --

1.監視valuable ERC20 Token 有沒有類似狀況
2.監視valuable NFT 有沒有類似狀況

-- 請我喝一杯咖啡 --

ETH / BNB : 0x997C1a628Ba5C3a14Fe4D1724fCCEBf3246D67A3


-- Start --

There are many Ethereum development frameworks, such as Hardhat and Truffle, almost all of which provide 10-20 default accounts for developers to use. However, after observation, some careless developers may inadvertently transfer ETH into these default accounts on the main network. This is where the niche market comes in, because the private keys of these default accounts are public. Therefore, when you detect this situation, you can even use Flashbots to transfer the ETH back to your wallet in the same block.

Taking the first default account provided by Hardhat as an example.
https://etherscan.io/address/0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266

Almost every 3 days, there will be some careless people who accidentally transfer money into those default accounts. This program provides detection and Flashbots transfer functions.

-- Settings --

Before running the program, you need to set up three environment variables:
HACKER_ADDRESS = "Your wallet's address"
HACKER_KEY = "Your wallet's private key"
INFURA_KEY = "INFURA_KEY"

You can decide which environment/type of node based on launch.json:
Mainnet or Goerli
Infura or Local node

-- Note --

It is recommended to use VSCode as the development IDE.
It is recommended to use the local node as the provider.

-- Upcoming updates --

Monitor whether valuable ERC20 Tokens have similar issues.
Monitor whether valuable NFTs have similar issues.

-- Buy me a coffee --

ETH / BNB: 0x997C1a628Ba5C3a14Fe4D1724fCCEBf3246D67A3





                      
            
