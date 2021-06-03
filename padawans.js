const fs = require('fs');
const { resourceUsage } = require('process');

function getPadawanNames(filename) {
  let data = fs.readFileSync(filename, "utf8");
  let result = data.split('\n');
  let cutThelastEl = result.slice(0, 4);
  //console.log(cutThelast);
  return cutThelastEl;
}

function getLightsaberScores() {

}
function getStats() {

}
function writeStats() {

}

const getPNames = getPadawanNames("./data/padawans.txt", "utf8");
console.log(getPNames);
//[ 'Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani' ] - this is output but test doesn't work

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
