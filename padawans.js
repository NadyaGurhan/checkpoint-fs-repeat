const fs = require('fs')

function getPadawanNames () {
  const data = fs.readFileSync('./data/padawans.txt');
  return (data.toString().trim().split('\r\n'))
}

function getLightsaberScores () {
  const dataScrores = fs.readFileSync('./data/scores.txt');
  dataScrores.toString().trim().split('\r\n')
  return (dataScrores.toString().par.trim().split('\r\n'))
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
