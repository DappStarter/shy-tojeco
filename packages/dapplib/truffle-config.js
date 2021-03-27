require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure trip wall crawl misery toward coral light army gift'; 
let testAccounts = [
"0xfe3cfe3a41559d5ef3aa4731a757551037bb99470e2d7fe84890d5ef33bd3404",
"0x12f7b82cdb12c4c7e5b8bf09255b90d1389945e13ce861934c0b621c33cc692c",
"0x7d9db853c7a0d71e258a98158b6ed7e477a601fa5554d8634024c530503346f5",
"0x29acf7390c2f266379446297ed1941386373d2536a2492288bbba3e3f57eafc8",
"0xde474a828e6a8f6a90f8a7f473f18d96151c3a30a3560e92867752a2bd04ffb3",
"0x74505588d337b634dc4700ae7c09575706e18e5db03be0ce1ed46d4237fe6a3d",
"0x0119be0a761dcd1d2dbc437dec750186d93b6afac6ba9fec5b2a8a2444bd45e6",
"0x5d4186734458dc5a064dab625b314c1cc8bde0f62d0395e568b5c642d820cc76",
"0x8eb6c8c136aee68c5d8efb11ee7d1964be1d6028e6af23bff94c88b0690f9c95",
"0xbe8f373958547def013d24293f2f5a9ac03ccecfac289e5b26dbf1eab7bd2748"
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
            version: '^0.5.11'
        }
    }
};
