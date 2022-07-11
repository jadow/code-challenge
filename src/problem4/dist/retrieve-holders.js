"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const INFURA_ID = '';
const provider = new ethers_1.ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/47f3c931268846e5969211c9bcfa9019`);
const address1 = '0x123d475e13aa54a43a7421d94caa4459da021c77';
const address2 = '0x0020c5222a24e4a96b720c06b803fb8d34adc0af';
const address3 = '0xfe808b079187cc460f47374580f5fb47c82b87a5';
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const balance1 = yield provider.getBalance(address1);
    const balance2 = yield provider.getBalance(address2);
    const balance3 = yield provider.getBalance(address3);
    console.log(`\nETH Balance of ${address1} --> ${ethers_1.ethers.utils.formatEther(balance1)} ETH\n`);
    console.log(`\nETH Balance of ${address2} --> ${ethers_1.ethers.utils.formatEther(balance2)} ETH\n`);
    console.log(`\nETH Balance of ${address3} --> ${ethers_1.ethers.utils.formatEther(balance3)} ETH\n`);
});
main();
//# sourceMappingURL=retrieve-holders.js.map