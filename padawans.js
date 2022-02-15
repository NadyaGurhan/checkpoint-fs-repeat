const fs = require('fs');
const { version } = require('punycode');

const padawans = fs.readFileSync('/Users/admin/Elbrus/Offline/checkpoint-fs/data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('/Users/admin/Elbrus/Offline/checkpoint-fs/data/scores.txt', 'utf-8');

function getPadawanNames() {
  return padawans.split('\n').filter(a=>a !='');
};
function getLightsaberScores() {
  return scores.split('\n')
  .map(a=>+a)
};
function getStats() {
  let x = padawans.split('\n').filter(a=>a !='')
  let y = scores.split('\n')
  return x +
};
//function writeStats() {
 // return padawans.split('\n')
//};
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  //writeStats
};
