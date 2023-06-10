import { ethers } from "hardhat";

async function main() {
    const ShigorSparrows = await ethers.getContractFactory("ShigorSparrows");
    const shigorSparrows = ShigorSparrows.attach("0x7340a44AbD05280591377345d21792Cdc916A388");
    await shigorSparrows.deployed();
    
    await (await shigorSparrows.setBaseURI("https://app-server.gaiaprotocol.com/metadata/standard/shigor-sparrows/")).wait();
    console.log("Set base URI");
}

main();
