// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./ERC721/ERC721GEnumerable.sol";

contract ShigorSparrows is ERC721GEnumerable {
    event SetName(string name_);
    event SetSymbol(string symbol_);

    constructor() ERC721GEnumerable("Shigor Sparrows", "SPARROW", "https://app-server.gaiaprotocol.com/metadata/standard/shigor-sparrows/") {}

    function setName(string calldata name_) external {
        require(hasRole(METADATA_OPERATOR_ROLE, msg.sender), "ERC721G: must have metadata operator role to setName");

        _name = name_;
        emit SetName(name_);
    }

    function setSymbol(string calldata symbol_) external {
        require(hasRole(METADATA_OPERATOR_ROLE, msg.sender), "ERC721G: must have metadata operator role to setSymbol");

        _symbol = symbol_;
        emit SetSymbol(symbol_);
    }
}
