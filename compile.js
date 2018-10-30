const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

const buildPath = path.resolve(__dirname, 'build'); //references build directory
fs.removeSync(buildPath); //removes build directory (in fs-extra, not fs)

const trackerPath = path.resolve(__dirname, 'contracts', 'Tracker_test.sol'); //idebtified the solidity file to be compiled
const source = fs.readFileSync(trackerPath, 'utf8');// reads in the source code from the solidity file - in utf encoding

const output = solc.compile(source, 1).contracts;//compiles solidity code inthe contracts property

fs.ensureDirSync(buildPath); //rebuilds the build directory - ensuring there is no duplicate directory

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  ); //loops over each contract in the solidity file and creates a compiled .json version
}
