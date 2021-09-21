require("@nomiclabs/hardhat-waffle");
//require("hardhat-erc1820");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-etherscan");
 const fs = require('fs');
 const privatekey = fs.readFileSync(".secret").toString().trim();
 const monkey = fs.readFileSync(".mainnet").toString().trim();
 const xkey = fs.readFileSync(".banker").toString().trim();
 
 module.exports = {
   defaultNetwork: "hardhat",
   networks: {
     hardhat: {
     },
     matic: {
      url: "https://polygon-mainnet.infura.io/v3/<infura key>",
      accounts: [ monkey ]
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/<infura key>",
      accounts: [ privatekey ]
    },
    goerli: {
      url: "https://goerli.infura.io/v3/<infura key>",
      accounts: [ privatekey]
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/<infura key>",
      accounts: [ privatekey]
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/<infura key>",
      accounts: [ xkey]
    },
    kovan: {
      url: "https://kovan.infura.io/v3/<infura key>",
      accounts: [ privatekey]
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.7.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
      version :"0.6.6" ,
        settings : {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
     
   },
   paths: {
     sources: "./contracts",
     tests: "./test",
     cache: "./cache",
     artifacts: "./artifacts"
   },
   mocha: {
     timeout: 20000
   },
   etherscan: {
    apiKey: "<etherscan API key here>"
  }

 }
 