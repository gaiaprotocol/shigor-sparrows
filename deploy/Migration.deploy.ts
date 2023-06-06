import { ethers } from "hardhat";

async function main() {
    const Migration = await ethers.getContractFactory("Migration");
    const migration = await Migration.deploy(
        "0x17c4758c973d0f850a8e1910bd9649699e056cb6", // old
        "0x7340a44AbD05280591377345d21792Cdc916A388", // new
    );
    await migration.deployed();

    const ShigorSparrows = await ethers.getContractFactory("ShigorSparrows");
    const shigorSparrows = ShigorSparrows.attach("0x7340a44AbD05280591377345d21792Cdc916A388");
    await shigorSparrows.grantRole("0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6", migration.address);

    console.log(`Migration address: ${migration.address}`);
}

main();
