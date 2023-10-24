const fs = require('fs')

function getPadawanNames() {
return(fs.readFileSync('./data/padawans.txt', 'utf8').trim().split(('\n')))

}


function getLightsaberScores() {
return(fs.readFileSync('./data/scores.txt', 'utf8'))

}


function getStats() {


}

const fs = require('fs');
function writeStats(stats, path) {
fs.writeFileSync(path, stats, 'utf8')
writeStats(stats.join('\n'), './data/stats.txt');

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
