require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remain smile hidden prize bone general'; 
let testAccounts = [
"0x15c369e708c581f18ad49d1baff703ff879b9036ab626b2496cf6d06c614f6e9",
"0x1eeaed97d0edb3bbebca11353b8aeba18cb08a24c0588596bbdf363979d20840",
"0xdf31c6d315a18616fe236e0e559105975ae0f4d1a3dcae2940c45a0c59f80457",
"0x619e64a13a17455f611a87c316258b15f60e4c49bf6e080dd8c8bf39a923ac26",
"0x4c23ab89bea720826518a8aaa7f03a19dbcb7b7c2851ef89692ee1c9de651d5c",
"0xef725a1f64f482b1a476a5326cb9b9b853eacba6074456ee2c7e6cd420cdf625",
"0xa41db53a222de641b541457cb635c644cafe7343f8ee23f9812eabd693734eca",
"0xc2d3c245f75064056754e6b26c1bab2a487832d5d4114620431b045ba54a74bb",
"0x28b884eb3be342afb6021702710a3d6f49e5e15f689ded3fa8c67af8b4b423e4",
"0x181569a54017160589b4f331e2f6a230b324d64efcc396b2b7a54efe673f0bea"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
