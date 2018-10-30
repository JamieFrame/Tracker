import web3 from './web3';
import compiledTracking from './build/TrackingFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(compiledTracking.interface),
  '0xFd4AEb73FA5F30a23A8c4e06f942Ee6b9EE1FCDd'
);

export default instance;
