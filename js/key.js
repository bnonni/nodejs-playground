const bip39 = require('bip39');
const BIP32Factory = require('bip32').BIP32Factory;
const ecc = require('tiny-secp256k1');
const bip32 = BIP32Factory(ecc);
const bitcoin = require('bitcoinjs-lib');

// judica
// 834990996b4c6a2a7abae727193d012cab0d39c1276578e25700ba79e3413624
// special collect normal comfort street pattern spider victory tornado potato vital castle
// zpub6yeQQXGa2hV91BFYT46LMXVPkEErWJfeJrYNaAsGmbXPd8x62TVwyd9oJPWpqTy1pACkvWWcJeKKWTfEpevNYb1fSCgxpCKna9AiSAojSpa
// zprvAZkxsn1EdNNUJpfo14NezZvdhv3z4hy8RiBS5Yb6gtk8sthAsx7cbhR6o8vEMGffF43iDU6TuES1yyMDiohXoNfz3gwiwCTu7fNMtp428kY

// sphinx
// upon bring athlete blur monitor call express chief term stem gold fish
// zpub6yqU1ScUWRT5MSD1ykRHx4yonXxE9SRAMWFX8z9V9P8FxMVnmBDRBytESBHV3cJLUV5V5P8M92MvpbnsYmGkcxVo17ty1YhCFrJvaAriJBu
// zprvAZx2UhM976LQfrxNsPFd2UfML28tcEZ9Xj2LYcWu95nnB6cwNk1pXUEZjaNFdGVuGWzdv5nib6wqFEMbGWPMfxNS14NHrV7G9zS72qwymi6

// polestra
// reopen error case fiber doll half pluck sort doll equip modify note
// zpub6mw355NTG69FvRVdnFRG1g98uirDgByEbpHenMbrAwYkH4sSRkdwKECd3WfVfaT36ZdJtwCHLNLeDMQE4FWZza7QERWWgzA44xszSZ8yCom
// 

// 

/**
 * bip-0031bip-0012bip-0042bip-0070bip-0141
 * BIP-0031BIP-0012BIP-0042BIP-0070BIP-0141
 * BIP: 75
 * BIP: 0031BIP: 0012BIP: 0042BIP: 0070BIP: 0141
 * BIP:0031BIP:0012BIP:0042BIP:0070BIP:0141
 * 
 * BIP: 0031BIP: 0012BIP: 0042BIP: 0075BIP: 0141
 * BIP:0031BIP:0012BIP:0042BIP:0075BIP:0141
 * https://tabctb.com/2022/key4/tastywheat/lukedashjr/1.bip-00312.bip-00123.bip-00424.bip-00755.bip-0141
 * 
 * 
 */



const seed = bip39.mnemonicToSeedSync(mnemonic);
const node = bip32.fromSeed(seed);

console.log(node.toBase58());

const network = bitcoin.networks.bitcoin
const pk = bitcoin.payments.p2wpkh({ pubkey: node.publicKey, network }).address
// console.log(Buffer.from(node.publicKey).toString('hex'))
// const strng = node.toBase58();
// const restored = bip32.fromBase58(strng);






/**
 * 
 * 
upon
bring
athlete
blur
monitor
call
express
chief

 */