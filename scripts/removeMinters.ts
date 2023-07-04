import { ethers } from "hardhat";

async function main() {
    const ShigorSparrows = await ethers.getContractFactory("ShigorSparrows");
    const shigorSparrows = ShigorSparrows.attach("0x7340a44AbD05280591377345d21792Cdc916A388");
    await shigorSparrows.revokeRole("0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6", "0xB102DBb144e74EbBDEDf261ACB8bf29df7Ab9850");
    await shigorSparrows.revokeRole("0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6", "0x4CF15a20B3f1C5b9452616b09f5b83180B120b74");
    await shigorSparrows.revokeRole("0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6", "0x3fa261CB71aCE750211E30c1A9B2B4C70cbadC4D");

    console.log("Remove Minters");
}

main();
