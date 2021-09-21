const { BigNumber } = require("@ethersproject/bignumber");
const { expect } = require("chai");
const { ethers, network } = require("hardhat");

describe("Test my ERC20", function() {

    let coin


    it("beforeAll", async function(){

        [owner, harith, ...addrs] = await ethers.getSigners();

        COIN = await ethers.getContractFactory("MBWCoin")
        coin = await COIN.deploy()
    })

    it("did I get any coins?", async function(){
        bal = await coin.balanceOf(owner.address)
        console.log(ethers.utils.formatEther(bal))
    })

    it("transfer some to Harith", async function() {
        await coin.transfer(harith.address,ethers.utils.parseEther("50000000"))
        bal = await coin.balanceOf(owner.address)
        console.log(ethers.utils.formatEther(bal))
        bal = await coin.balanceOf(harith.address)
        console.log(ethers.utils.formatEther(bal))
    })




})