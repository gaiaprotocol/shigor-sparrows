import { ethers } from "hardhat";

async function main() {
    const Migration = await ethers.getContractFactory("Migration");
    const migration = Migration.attach("0xB102DBb144e74EbBDEDf261ACB8bf29df7Ab9850");
    await migration.deployed();

    for (let i = 5; i < 20; i += 1) {
        await (await migration.migrate(400 * i + 1, 400 * (i + 1))).wait();
        console.log(`Migrated ${400 * i + 1}-${400 * (i + 1)} ShigorSparrows`);
    }
    console.log("Migrated ShigorSparrows");
}

main();
