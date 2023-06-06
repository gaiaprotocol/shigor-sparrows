// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./ERC721/ERC721G.sol";

contract Migration {

    ERC721G private immutable old;
    ERC721G private immutable new_;

    constructor(address _old, address _new) {
        old = ERC721G(_old);
        new_ = ERC721G(_new);
    }

    function migrate(uint256 fromId, uint256 toId) external {
        for (uint256 tokenId = fromId; tokenId <= toId; tokenId += 1) {
            address owner = old.ownerOf(tokenId);
            new_.mint(owner, tokenId);
        }
    }
}
