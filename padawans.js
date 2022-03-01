const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const names = padawans.split('\n');
  names.pop();
 return names;
}

function getLightsaberScores() {
 const saberScores = scores.split('\n'); 
  return saberScores.map(string => +string);
}

function getStats() {

}

function writeStats() {

}

module.exports = { getPadawanNames, getLightsaberScores, getStats, writeStats };
