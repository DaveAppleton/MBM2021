const {network, ethers} = require("hardhat");

// remember to add ERC20Drain functions

async function main() {
    if (network.name != "rinkeby")  {
        console.warn("This needs to be on RINKEBY");
        process.exit(1)
    }
    const [owner] = await ethers.getSigners();
    console.log(network.name);
    console.log("owner",await owner.getAddress());
    // deployer address : 0xA45cb6B905F14b4B38bf76d79445304b5C2F355f
    await deployStuff();
}

async function deployStuff() {

    [owner] = await ethers.getSigners()

    coinAddr = "0x7b0f01b50BF8db67E1bc833E8906e231c329826b"

    COIN = await ethers.getContractFactory("MBWCoin")

    if (coinAddr.length == 0){
        coin = await COIN.deploy()
        console.log(coin.deployTransaction.hash)

        await coin.deployTransaction.wait()


        console.log("Waiting 30 seconds for etherscan to register it")
        await new Promise(resolve => setTimeout(resolve, 1000 * 60)); // 30 seconds
        coinAddr = coin.address
    }
    console.log("verifying")

    await hre.run("verify:verify", {
        address: coinAddr,
        constructorArguments: [
                 
        ]
    });

}


main()
    .then(()=>process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
