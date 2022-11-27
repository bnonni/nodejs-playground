const stringify = (data) => {
 return JSON.stringify(data);
};
const parse = (data) => {
 return JSON.parse(data);
};
const fs = require("fs");
const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const key = "w@rNdJ&NLX^HFgPM?#_C8d7p^Ufs9JVy";
const initVector = "qc!8*m6n$nWxCGC$";

const encrypt = async (data) => {
 const cipher = crypto.createCipheriv(algorithm, key, initVector);
 let encryptedData = cipher.update(data, "utf-8", "hex");
 encryptedData += cipher.final("hex");
 return encryptedData;
};

const decrypt = async (encryptedData) => {
 const decipher = crypto.createDecipheriv(algorithm, key, initVector);
 let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
 decryptedData += decipher.final("utf8");
 return decryptedData;
};
const Encrypt = async () => {
 const encrypted = await encrypt(
   stringify({
     name: "Dinner with the CEO",
     price: "1000",
     sale: true,
     image: "data:image/png;base64,",
   })
 );
 console.log(encrypted);
 // fs.appendFileSync("CreateNFT.txt", encrypted);
};
const Decrypt = async () => {
 console.log(
   // parse(
   await decrypt(
     "be9aae0f5bb10cb25f6544792aa22a11ad01448f9496d3b40610a7d3687f2831c1811257f2dcb19b7239fab77458650dfa3f744bde8b5786be7e580616bb523c3526a56e3b027d4e9467055e7841dc8c"
   )
   // )
 );
};
// Decrypt();
Encrypt();

/**
* {grantor: "nc000000",grantee: "dummy",role: "0x757d525dc4183ae971983c66c174846645a8a7887a8616f616aec212730cb6ad"}
*/
// xlr X
// console.log(encrypt('c45aa9d8f373d8076213d5cf8d5c1609b806b476e413d937892c5fd54e5924ab'))
// console.log(decrypt('9de82b4b0defa3bc61768d24fa4e54a59e4ee33ecbd1af9eab5b0fe39338c816757c21e558c8b1c8ed159be0f566b6bcd22dfeb6d4818b200ab6c0119d6c54a48b57ff4ab5da4638551d3b336b815055'))

// LH185127 X
// console.log(encrypt('440fe1ea75cbcb34900fd11dc9e36714f8e9ea63c503c67dd96640f94e200530'))
// console.log(decrypt('4c6108d4262db5acb1fc0337c2755221910d1d021a55f95f07bb2bad368f3ff195b1073d278b24e49b27e375951acec8aa2783879b239a050672a95ab3c1ba63db977ad52e7ed5fa5e1a588fa899b86a'))

// JB185581 X
// console.log(encrypt('fa0d598f6e28a3b78145a7321db80f0bd75c53e315901cc459288590e2f5d006'))
// console.log(decrypt('c08ecc79150e5109c19fdf1970e0896809ae7eda62ce74db4dfa5e28070e2acf834b73da09660315d851b3afa729b8f56d164b3670e09a136cbb6839e69b30d6bd2adf3ae8810b24a45e74716ccb87b3'))

// JL185406 X
// console.log(encrypt('ab961665761d92d2ff83a7ceaa7ea8ab4766bef98b1c98e02eee49366f24cd5a'))
// console.log(decrypt('b8bced382da5eba9ce0bb2d53284aa69cf568eb96285cd5081b2bf555702d462cc0420940727260d0600558731c3193a94614d5def4032e4531903dcab81381415b477e12034970954a152d6c8edd3f5'))

// TR185118 X
// console.log(encrypt('9cddc69c36dd60efa14031697910247de0939c4935cdec2534e9034f893e73a2'))
// console.log(decrypt('ff2877575c93714e6a3985bab8de17b4fc710e743d141a9da3fe3efa873f6688ab689263295c7b894d21b6d51851f6dbe096064410536428a8440edb2966d17ee0d7ad1c69527c307487c4b78dbeda1f'))

// AL185217 X
// console.log(encrypt('15ba53f8d1a83282b0dccb614feb73cc49fc3cb43fd718c971fe76c0c4624fd6'))
// console.log(decrypt('007f9bd3b0fac504c0f4343a676259f5be59fe7468702dfdec6dcfb303d52c858567e974f6c80705b54fe7368944b01bc01fcd307e7119f4d1f33f8a9151a3f21cb7be29a32e4e644f1ebe0e823c143e'))

// console.log(encrypt('e6d545a1e06c31f60ac266b3e5803e8a6d6e16b7ae94fd4f111c7d9d90b3d2b9'))
// console.log(decrypt('3af4d145ec308d0c7fd1334b2afc69035dd5b04268389d940d2dde401dd75ceb9fc55167db294ddd1aed3418b2dc267bb06b2348bc0ddafd5f3b05c5fb056282aeba010d46e3c9e14ced3c0f9e7324c1'))

// console.log(encrypt('3A5TER3GGAES256CBC350K'))
// console.log(decrypt('7b369e0701132be62f40b5edee6f71ca55c5686199ba9b511f784a596da7df07'))
// console.log(encrypt('test1243wge'))
// console.log(decrypt('dd69de6212c86194c35fa501e16b7ee3'))

// console.log(
//   decrypt(
//     "807ac01ef7ff5058ea1bb9dd93b02e8d574909c6d2a9caf7d2d4572b5d19a18e29e0b0264d8b61fd5b51810e08b2ee8fc5f89a34e082a07306b2e945ef8ad9642b23bd8fc0bedf190ebf8eebb0ab1757"
//   )
// );
// console.log(
//   encrypt("194fcca67b10184a3d1b79ac7c4016e429a7f03470cbf42927217636086e19bc")
// );