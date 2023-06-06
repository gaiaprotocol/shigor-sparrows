import { ethers } from "hardhat";

async function main() {
    const ShigorSparrows = await ethers.getContractFactory("ShigorSparrows");
    const shigorSparrows = await ShigorSparrows.deploy();
    await shigorSparrows.deployed();

    console.log(`ShigorSparrows address: ${shigorSparrows.address}`);
}

main();
