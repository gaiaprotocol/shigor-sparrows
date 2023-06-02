import { ShigorSparrows } from "../typechain-types";

import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";

let deployer: SignerWithAddress, alice: SignerWithAddress, bob: SignerWithAddress, carol: SignerWithAddress, feeRecipient: SignerWithAddress;
let nft: ShigorSparrows;

const setupTest = async () => {
    const factory = await ethers.getContractFactory("ShigorSparrows");
    nft = await factory.deploy();
};

describe("ShigorSparrows", function () {
    before(async () => {
        [deployer, alice, bob, carol, feeRecipient] = await ethers.getSigners();
    });

    beforeEach(async () => {
        await setupTest();
    });

    it("init test", async () => {
        expect(await nft.name()).to.be.equal("Shigor Sparrows");
        expect(await nft.symbol()).to.be.equal("SPARROW");

        await nft.setName("Shigor Sparrows2");
        await nft.setSymbol("SPARROW2");

        expect(await nft.name()).to.be.equal("Shigor Sparrows2");
        expect(await nft.symbol()).to.be.equal("SPARROW2");
    });
});
