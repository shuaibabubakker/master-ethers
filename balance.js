const { ethers } = require('ethers'); 

const INFURA_ID = '3f4ac83f6cd34d22a8d2e79b5d6c37db';
const provider = new ethers.providers.JsonRpcProvider('https://ropsten.infura.io/v3/' + INFURA_ID);

const address = '0x4d699Ec81a537f850e63d5EE05BE0df275eD2F13';
const main = async ()=> {
    const balance = await provider.getBalance(address);
    console.log('eth balance: ' + ethers.utils.formatEther( balance));
}

main()

