const { ethers } = require('ethers'); 

const INFURA_ID = '3f4ac83f6cd34d22a8d2e79b5d6c37db';
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/' + INFURA_ID);


const ERC2_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function decimals() view returns (uint8)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint256)",
    "function transfer(address, uint256) returns (bool)",
]

const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const contract = new ethers.Contract(address, ERC2_ABI, provider);

const main = async ()=> {
    const name = await contract.name();
    const symbol = await contract.symbol();
    const decimals = await contract.decimals();
    const totalSupply = await contract.totalSupply();
    const balance = await contract.balanceOf(address);
    console.log('name: ' + name);
    console.log('symbol: ' + symbol);
    console.log('decimals: ' + decimals);
    console.log('totalSupply: ' + totalSupply);
    console.log('balance: ' + balance);

    const balance2 = await contract.balanceOf('0x6B175474E89094C44Da98b954EedeAC495271d0F');
    console.log('balance2: ' + balance2);
}

main()

