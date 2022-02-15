const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'xxx xxx core patch xxx connect xx upper broken truly xx xxx',
  'https://rinkeby.infura.io/v3/xxxx'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts, 'accountsaccountsaccounts')
  console.log('Attempting to deploy from account', accounts[0]);
  console.log(interface)

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });


    // .send({ gas: '2310000', from: accounts[0] });
  console.log('Contract deployed to', result.options.address);
};
deploy();
