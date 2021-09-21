pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MBWCoin is ERC20, Ownable {

    constructor() ERC20("MBMCoin","MBMC") { // once at the start
        _mint(msg.sender,100000000 ether);
    }

    function Mint(uint256 amount) public onlyOwner {
        _mint(msg.sender,amount);
    }


}