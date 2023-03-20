export const accountArr = () => {
  return accountArrInternal;
};

export const gasPriceMultiple = () => {
  return gasPriceMultipleInternal;
}

export const profitUWant = () => {
  return profitUWantInternal;
}

const accountArrInternal = 
[
  { //0 hardhat
    address: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", 
    key: "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
  },
  { //1
    address: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8", 
    key: "59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"
  },
  { //2
    address: "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC", 
    key: "5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a"
  },
  { //3
    address: "0x90F79bf6EB2c4f870365E785982E1f101E93b906", 
    key: "7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6"
  },
  { //4
    address: "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65", 
    key: "47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a"
  },
  { //5
    address: "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc", 
    key: "8b3a350cf5c34c9194ca85829a2df0ec3153be0318b5e2d3348e872092edffba"
  },
  { //6
    address: "0x976EA74026E726554dB657fA54763abd0C3a0aa9", 
    key: "92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e"
  },
  { //7
    address: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955", 
    key: "4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356"
  },
  { //8
    address: "0x23618e81E3f5cdF7f54C3d65f7FBc0aBf5B21E8f", 
    key: "dbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97"
  },
  { //9
    address: "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720", 
    key: "2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6"
  },
  { //10
    address: "0xBcd4042DE499D14e55001CcbB24a551F3b954096", 
    key: "f214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897"
  },
  { //11
    address: "0x71bE63f3384f5fb98995898A86B02Fb2426c5788", 
    key: "701b615bbdfb9de65240bc28bd21bbc0d996645a3dd57e7b12bc2bdf6f192c82"
  },
  { //12
    address: "0xFABB0ac9d68B0B445fB7357272Ff202C5651694a", 
    key: "a267530f49f8280200edf313ee7af6b827f2a8bce2897751d06a843f644967b1"
  },
  { //13
    address: "0x1CBd3b2770909D4e10f157cABC84C7264073C9Ec", 
    key: "47c99abed3324a2707c28affff1267e45918ec8c3f20b8aa892e8b065d2942dd"
  },
  { //14
    address: "0xdF3e18d64BC6A983f673Ab319CCaE4f1a57C7097", 
    key: "c526ee95bf44d8fc405a158bb884d9d1238d99f0612e9f33d006bb0789009aaa"
  },
  { //15
    address: "0xcd3B766CCDd6AE721141F452C550Ca635964ce71", 
    key: "8166f546bab6da521a8369cab06c5d2b9e46670292d85c875ee9ec20e84ffb61"
  },
  {  //16
    address: "0x2546BcD3c84621e976D8185a91A922aE77ECEc30", 
    key: "ea6c44ac03bff858b476bba40716402b03e41b8e97e276d1baec7c37d42484a0"
  },
  { //17
    address: "0xbDA5747bFD65F08deb54cb465eB87D40e51B197E", 
    key: "689af8efa8c651a91ad287602527f3af2fe9f6501a7ac4b061667b5a93e037fd"
  },
  { //18
    address: "0xdD2FD4581271e230360230F9337D5c0430Bf44C0", 
    key: "de9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0"
  },
  { //19
    address: "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", 
    key: "df57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e"
  },
  { //20 truffle
    address: "0xfa9df0a824f385298537480eb68fde6ddf4222a7", 
    key: "0e073f3fb2ea2ddd540b8c835be23dff601c8f1f86517b43199ec4547d6a5e9f"
  },
  { //21
    address: "0xaac8050886725635ca58030b15dc8dbb5a371a91", 
    key: "64a16de280402ec23707013455a43ef2439788a1b435824f8ef890dc1cacb1f2"
  },
  { //22
    address: "0x1a97419a1811ae2e3b955a464ad225b5fa62bb64", 
    key: "246e74fa16a57bd93bbcef28861a9cc961ac6c2697f0add30ada699c2400bd2c"
  },
  { //23
    address: "0xdfc819e82923632d290e02e412393c91f394ad1a", 
    key: "28957e996675774368176e25b5da7c793542529d460d0e738329fe6afdd017dd"
  },
  { //24
    address: "0x0c2620e1eeb24ae285c604f4fd15491e96e2ecdb", 
    key: "c81c74f405b484c65fde761e447b6aa3d44d920681599c1a9dfd4390fff550ef"
  },
  { //25
    address: "0x0ee543935bfe2321c3395edebfffb8737146767a", 
    key: "fd287b20ca8cb82abac55bed9bf6359b0e1cfcd16596b164a597d680565f50d6"
  },
  { //26
    address: "0x8b97d4328b928066eab06558e340f8f25b796844", 
    key: "b5742e43b7b10953cb2a20c28e110dc7fb5eafb3722104390be0a268eaec1054"
  },
  { //27
    address: "0xf81f4c222bc881a1914882694f285fb773dfd792", 
    key: "b9b0e6280512c60f92847f068ed3d8c30733f53d602897db31064f32fa799c69"
  },
  { //28
    address: "0x9ccb95a53f8527e44801c1f9fd1c617437ce2204", 
    key: "f5f58b4ac8f02888dd3608b784b9dc5617ce96620dfa4c9aca4b9b29dcee1821"
  },
  { //29
    address: "0xe12f6c57e96d01611a9820ea337eb28c06425564", 
    key: "46d560f733ad12e634c5c2aeece469d3fa97487c9dca052da20e119e1ffc3f64"
  },
  { //30 Remix
    address: "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", 
    key: "503f38a9c967ed597e47fe25643985f032b072db8075426a92110f82df48dfcb "
  },
  { //31
    address: "0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2", 
    key: "7e5bfb82febc4c2c8529167104271ceec190eafdca277314912eaabdb67c6e5f"
  },
  { //32
    address: "0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db", 
    key: "cc6d63f85de8fef05446ebdd3c537c72152d0fc437fd7aa62b3019b79bd1fdd4"
  },
  { //33
    address: "0x78731D3Ca6b7E34aC0F824c42a7cC18A495cabaB", 
    key: "638b5c6c8c5903b15f0d3bf5d3f175c64e6e98a10bdb9768a2003bf773dcb86a"
  },
  { //34
    address: "0x617F2E2fD72FD9D5503197092aC168c91465E7f2", 
    key: "f49bf239b6e554fdd08694fde6c67dac4d01c04e0dda5ee11abee478983f3bc0"
  },
  { //35
    address: "0x17F6AD8Ef982297579C203069C1DbfFE4348c372", 
    key: "adeee250542d3790253046eee928d8058fd544294a5219bea152d1badbada395"
  },
  { //36
    address: "0x5c6B0f7Bf3E7ce046039Bd8FABdfD3f9F5021678", 
    key: "097ffe12069dcb3c3d99e6771e2cbf491a9b8b2f93ff4d3468f550c5e8264755"
  },
  { //37
    address: "0x03C6FcED478cBbC9a4FAB34eF9f40767739D1Ff7", 
    key: "5f58e8b9f1867ef00578b6f03e159428ab168f776aa445bc3ecdb02c7db8e865"
  },
  { //38
    address: "0x1aE0EA34a72D944a8C7603FfB3eC30a6669E454C", 
    key: "290e721ac87c7b3f31bef7b70104b9280ed3fa1425a59451490c9c02bf50d08f"
  },
  { //39
    address: "0x0A098Eda01Ce92ff4A4CCb7A4fFFb5A43EBC70DC", 
    key: "27efe944ff128cf510ab447b529eec28772f13bf65ebf1cbd504192c4f26e9d8"
  },
  { //40
    address: "0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c", 
    key: "3cd7232cd6f3fc66a57a6bedc1a8ed6c228fff0a327e169c2bcc5e869ed49511"
  },
  { //41
    address: "0x14723A09ACff6D2A60DcdF7aA4AFf308FDDC160C", 
    key: "2ac6c190b09897cd8987869cc7b918cfea07ee82038d492abce033c75c1b1d0c"
  },
  { //42
    address: "0x4B0897b0513fdC7C541B6d9D7E929C4e5364D2dB", 
    key: "dae9801649ba2d95a21e688b56f77905e5667c44ce868ec83f82e838712a2c7a"
  },
  { //43
    address: "0x583031D1113aD414F02576BD6afaBfb302140225", 
    key: "d74aa6d18aa79a05f3473dd030a97d3305737cbc8337d940344345c1f6b72eea"
  },
  { //44
    address: "0xdD870fA1b7C4700F2BD7f44238821C26f7392148", 
    key: "71975fbf7fe448e004ac7ae54cad0a383c3906055a65468714156a07385e96ce"
  },
  { //WAFFLE 45
    address:"0x17ec8597ff92C3F44523bDc65BF0f1bE632917ff",
    key:'29f3edee0ad3abf8e2699402e0e28cd6492c9be7eaab00d732a791c33552f797'
  },
  {//46
    address:"0x63FC2aD3d021a4D7e64323529a55a9442C444dA0",
    key:'5c8b9227cd5065c7e3f6b73826b8b42e198c4497f6688e3085d5ab3a6d520e74'
  },
  {//47
    address:"0xD1D84F0e28D6fedF03c73151f98dF95139700aa7",
    key:'50c8b3fc81e908501c8cd0a60911633acaca1a567d1be8e769c5ae7007b34b23'
  },
  {//47
    address:"0xd59ca627Af68D29C547B91066297a7c469a7bF72",
    key:'706618637b8ca922f6290ce1ecd4c31247e9ab75cf0530a0ac95c0332173d7c5'
  },
  {//48
    address:"0xc2FCc7Bcf743153C58Efd44E6E723E9819E9A10A",
    key:'e217d63f0be63e8d127815c7f26531e649204ab9486b134ec1a0ae9b0fee6bcf'
  },
  {//49
    address:"0x2ad611e02E4F7063F515C8f190E5728719937205",
    key:'8101cca52cd2a6d8def002ffa2c606f05e109716522ca2440b2cc84e4d49700b'
  },
  {//50
    address:"0x5e8b3a7e6241CeE1f375924985F9c08706f41d34",
    key:'837fd366bc7402b65311de9940de0d6c0ba3125629b8509aebbfb057ebeaaa25'
  },
  {//51
    address:"0xFC6F167a5AB77Fe53C4308a44d6893e8F2E54131",
    key:'ba35c32f7cbda6a6cedeea5f73ff928d1e41557eddfd457123f6426a43adb1e4'
  },
  {//52
    address:"0xDe41151d0762CB537921c99208c916f1cC7dA04D",
    key:'71f7818582e55456cb575eea3d0ce408dcf4cbbc3d845e86a7936d2f48f74035'
  },
  {//53
    address:"0x121199e18C70ac458958E8eB0BC97c0Ba0A36979",
    key:'03c909455dcef4e1e981a21ffb14c1c51214906ce19e8e7541921b758221b5ae'
  }
];

// 10 means 10 times gas fee
const gasPriceMultipleInternal = 10;
// 100 means 100 wei eth
const profitUWantInternal = 100;

