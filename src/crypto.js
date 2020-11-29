import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Utf8.parse(KEY); //16位

export function encrypt(word) {
    const srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.DES.encrypt(srcs, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
  }