const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames() {
 const padawan = fs.readFileSync(`data/padawans.txt`, 'utf-8').split('\n')
 return padawan
  
}

function getLightsaberScores() {
  // const arrLight = [];
  const lightsaber = fs.readFileSync(`data/scores.txt`, 'utf-8').split(' ')
  return lightsaber

}