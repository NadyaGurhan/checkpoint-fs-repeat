const fs = require('fs');
const padawans = require('./data/padawans.txt');
const scores = require('./data/scores.txt');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const list = fs.readFileSync('./data/padawans.txt');
  return list;
  console.log(list);
  // const list = [];
  // list.push(padawans);
  // list.forEach((el) => el);
  // return el;
}

function getLightsaberScores() {

}

function getStats() {

}

function writeStats() {

}
