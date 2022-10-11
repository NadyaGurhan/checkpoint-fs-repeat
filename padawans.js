const fs = require('fs')

function getPadawanNames() {
  const names = fs.readFileSync('data/padawans.txt', 'utf8').split('\n').slice(0, -1);
  return names
}

console.log(getPadawanNames());

function getLightsaberScores() { 
  const scores = fs.readFileSync( 'data/scores.txt', 'utf8').split('\n');
  for(let i = 0; i < scores.length; i += 1){
    scores[i] = Number(scores[i]);
}
return scores;
}

function getStats() {
  const arr = [];
  for (let i = 0; i < getPadawanNames().length; i += 1) {
    arr.push([getPadawanNames()[i], getLightsaberScores()[i]]); 
  }
    return arr;

}

const processArg = process.argv[2];

function writeStats(){
  const stats = getStats(processArg);
fs.writeFileSync('./data/stats.txt', stats.join('\n'), 'utf8').split(', ').join(' ');
return stats;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
