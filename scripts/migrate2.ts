import { ethers } from "hardhat";

async function main() {
    const Migration = await ethers.getContractFactory("Migration2");
    const migration = Migration.attach("0x3fa261CB71aCE750211E30c1A9B2B4C70cbadC4D");
    await migration.deployed();

    for (let i = 0; i < 20; i += 1) {
        const from = 400 * i + 1;
        await (await migration.migrate(from < 2 ? 2 : from, 400 * (i + 1))).wait();
        console.log(`Migrated ${400 * i + 1}-${400 * (i + 1)} ShigorSparrows`);
    }
    console.log("Migrated ShigorSparrows");
}

main();
