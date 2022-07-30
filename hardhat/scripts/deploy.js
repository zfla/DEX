const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env"});
const { CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevContractAddress = CRYPTO_DEV_TOKEN_CONTRACT_ADDRESS;
  const exchangeContract = await ethers.getContractFactory("Exchange");
  const deployedExchangeContract = await exchangeContract.deploy(
    cryptoDevContractAddress
  );
  await deployedExchangeContract.deployed();
  console.log("Deployed Exchange Contract Address:", deployedExchangeContract.address); // uploaded to 0x67e4ff038Dcb6F98312acA67DF9130C492307EB3
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

