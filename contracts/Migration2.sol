// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./ERC721/ERC721G.sol";

contract Migration2 {
    ERC721G private immutable old;
    ERC721G private immutable new_;

    constructor(address _old, address _new) {
        old = ERC721G(_old);
        new_ = ERC721G(_new);
    }

    function isContract(address _addr) private view returns (bool) {
        uint32 size;
        assembly {
            size := extcodesize(_addr)
        }
        return (size > 0);
    }

    function migrate(uint256 fromId, uint256 toId) external {
        for (uint256 tokenId = fromId; tokenId <= toId; tokenId += 1) {
            address owner = old.ownerOf(tokenId);
            if (isContract(owner)) {
                new_.mint(0x8b2A97bF13d44fB1A2B3EB5a14A69f75aFf1EEB1, tokenId);
            }
        }
    }
}
