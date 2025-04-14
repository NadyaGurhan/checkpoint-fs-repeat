const fs = require('fs');
const { get } = require('http');

function getPadawanNames(){
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split(', ').map(name => name.trim())
}

function getLightsaberScores(){
  return fs.readFileSync('./data/scores.txt', 'utf-8').split(', ').map(name => name.trim())
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

