const fs = require('fs');

const padList = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
function getPadawanNames() {
  return padList.trim().split('\n');
}

function getLightsaberScores() {
  return scores.split('\n').map((el) => el * 1);
}

function getStats() {
  const stat = [];
  for (let i = 0; i < getPadawanNames().length; i++) {
    stat.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  return stat;
}

function writeStats(){
    const res = getStats().map((el)=> el = `${el[0]} ${el[1]}`)
    const result = res.join('\n');
    return result;

}
fs.writeFileSync('data/stats.txt', writeStats())
// console.log(getPadawanNames())

module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
}