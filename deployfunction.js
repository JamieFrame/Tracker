function deployContract(long, lat)
{
  const HDWalletProvider = require('truffle-hdwallet-provider');
  const Web3 = require('web3');
  const compiledTracking = require('./build/Tracking.json');

  const provider = new HDWalletProvider(
    'tattoo between topple orange refuse damp crash utility cup pride rural wage',
    'https://rinkeby.infura.io/v3/7397099b57874264b41fc9c12d962a8e'
  );
  const web3 = new Web3(provider);

  const deploy = async () => {
    const accounts = await web3.eth.getAccounts();



    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(
      JSON.parse(compiledTracking.interface)

    )
      .deploy({ data: compiledTracking.bytecode, arguments: [long, lat, web3.utils.toWei('0.001', 'ether'), '60'] })
      .send({value: web3.utils.toWei('1', 'ether'), gas: '3000000', from: accounts[0]},


      );


    console.log('Contract deployed to', result.options.address);
  };
  deploy();
}
