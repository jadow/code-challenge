import { ethers } from "ethers";

const INFURA_ID = ''
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/47f3c931268846e5969211c9bcfa9019`)

const address1 = '0x123d475e13aa54a43a7421d94caa4459da021c77'
const address2 = '0x0020c5222a24e4a96b720c06b803fb8d34adc0af'
const address3 = '0xfe808b079187cc460f47374580f5fb47c82b87a5'

const main = async () => {
    const balance1 = await provider.getBalance(address1)
    const balance2 = await provider.getBalance(address2)
    const balance3 = await provider.getBalance(address3)
    console.log(`${address1} ${ethers.utils.formatEther(balance1)}\n`)
    console.log(`${address2} ${ethers.utils.formatEther(balance2)}\n`)
    console.log(`${address3} ${ethers.utils.formatEther(balance3)}\n`)
}

main()