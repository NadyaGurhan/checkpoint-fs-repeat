const { log } = require('console');
const fs = require('fs');

let padNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
let scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  let names = padNames.split('\n');
  let popped = names.pop();

  return names;
}

function getLightsaberScores() {
  let newe = scores.replaceAll('\n', ',');
  const newArr = [];
  let up = newe.split(',');

  for (const iterator of up) {
    let u = parseInt(iterator);
    console.log(u)
    newArr.push(u);
  }
  return newArr;
}

function getStats() {

}

function writeStats() {

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
