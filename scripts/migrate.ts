import { ethers } from "hardhat";

async function main() {
    const Migration = await ethers.getContractFactory("Migration");
    const migration = Migration.attach("0x06a7B42A857322B9795ECaB082B7886C2Cc02fCF");
    await migration.deployed();
    
    await (await migration.migrate(1, 1)).wait();
    console.log("Migrated ShigorSparrows");
}

main();
