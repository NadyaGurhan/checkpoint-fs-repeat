const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf8');
  const arr = data.split(EOL);
  return arr;
}

function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', 'utf8');
  const arr = data.split(EOL).map((el) => Number(el));
  return arr;
}

function getStats() {
  const data1 = fs.readFileSync('./data/padawans.txt', 'utf8');
  const arr1 = data1.split(EOL);
  const resultarr = arr1.map((el)=> el.split(' '));
  for (let i = 0; i< resultarr.length; i++){
    const data2 = fs.readFileSync('./data/scores.txt', 'utf8');
    const arr2 = data2.split(EOL).map((el) => Number(el));
    resultarr[i].push(arr2[i])
  }return resultarr
}


function writeStats() {
const result = getStats()
const resultstr = result.join(EOL)
fs.writeFileSync(resultstr, "data/stats.txt', 'utf8'")

}

console.log(writeStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
