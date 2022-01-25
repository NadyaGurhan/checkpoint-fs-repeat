const { strictEqual } = require('assert');
const fs = require('fs');
const PATH = './data/'
function generateFileToArray(path) {
  const str = fs.readFileSync(path, 'utf-8').trim();
  const array = str.split('\n');
  return array;
}

function getPadawanNames() {
 return generateFileToArray(`${PATH}padawans.txt`);
}

function getLightsaberScores() {
  return generateFileToArray(`${PATH}scores.txt`).map((elem) => +elem);
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];

  for(let i = 0; i < padawans.length; i += 1){
    result.push([padawans[i], scores[i]]);
  }

  return result;
}

function writeStats() {
  const stats = getStats();
  const fileName = 'stats.txt';
  let str = '';

  stats.forEach((elem,index) => {
    let currentStr = elem.join(' ');
    index === stats.length-1 ? str += currentStr: str += currentStr + '\n'
  })
  fs.writeFileSync(`${PATH}${fileName}`, str)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
