require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remain mistake gloom clog orange stove'; 
let testAccounts = [
"0x9261860128704b85abcc9a52d18f67a5c4013fa5e34afae71240bc8e6f4ac712",
"0xf878bbf6baaafa4a2c789884248a44d6de8b4843ac8c4db0aa7fb5828941cdaa",
"0x1624ef6de547993ac3e802fec6e830130aea455d6ff4abd08ade3b2031dd0530",
"0x8c342381c97fa50e8477d5e06f09a1cdb8888b9cabd711a6ba6a223bd53304ee",
"0x4274adbfb67fc4360128d88c406627fbf03492c1dccfedd7ad0c013c9094b66e",
"0xfed63e1e2d330a7d8f9474dca90cdb01709bfd59a73f8b828f2e24f33847907e",
"0x452879db1f87e34fab414cdc391326b303529f7c72db24c4b9f082d6f4e79e14",
"0x7fa90b37a1144c2e90bfe36d309788749ab1e36c086127af5d43dea4f64fd3d6",
"0x674d1178795b2e70fa6f35ef74420149909002feb362bb16b135f4181007d4ff",
"0x45d9e6d904e2336c48ae74796b2a16a28cb420f504a6e65a319c0aedcd137974"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

