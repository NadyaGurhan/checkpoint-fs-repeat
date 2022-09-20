const fs = require('fs')

let pNames = fs.readFileSync(__dirname + '/data/padawans.txt', 'utf-8');


let pScores = fs.readFileSync(__dirname + '/data/scores.txt', 'utf-8');

const getPadawanNames = () => {
let nSplitted = pNames.split('\n');
let nSliced = nSplitted.slice(0, -1)
return nSliced;
}

const getLightsaberScores = () => {
let pSplitted = pScores.split('\n');
let pMapped = pSplitted.map((el) => +el);
return pMapped;
}

const nnSliced = fs.readFileSync(__dirname + '/data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
const ppMapped = fs.readFileSync(__dirname + '/data/scores.txt', 'utf-8').split('\n').map((el) => +el);

const getStats = () => {
  let psArr = [];
  for (let index = 0; index < nnSliced.length; index+=1) {
    psArr.push([nnSliced[i], ppMapped[i]])
    
  }
  return psArr
}

const writeStats = () => {
  return fs.appendFileSync(__dirname + '/data/stats.txt', )
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
