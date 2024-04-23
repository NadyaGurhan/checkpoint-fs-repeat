
const fs = require('fs')

const padawans = fs.readFileSync("./data/padawans.txt", 'utf-8').trim('').split('\n')
const scores = fs.readFileSync("./data/scores.txt", 'utf-8').split('\n').map(Number)





function getPadawanNames(){
return padawans
}
function getLightsaberScores(){
return scores
}
function getStats(){
let padawansScores = padawans.map((padavans,index) => [padavans,scores[index]])
return padawansScores
}

function writeStats(){
  fs.writeFileSync('./data/stats.txt', getStats().join('\n'), 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
