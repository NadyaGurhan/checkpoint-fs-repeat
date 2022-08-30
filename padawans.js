const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(names) {
  const nameList = fs.readFileSync('data/padawans.txt');
  const result = [];
  for (let i = 0; i < nameList.length; i++) {
    result.push(nameList[i]);
  }
  return result;
}

const scores = fs.readFileSync('data/scores.txt');
function getLightsaberScores(scores) {
  // const scores = fs.readFileSync('data/scores.txt');
  const newArr = [];
  for (let i = 0; i < scores.length; i++) {
    newArr.push(scores[i]);
  }
  return newArr;
}

const nameTiers = fs.readFileSync('data/padawans.txt');
const scoreTiers = fs.readFileSync('data/padawans.txt');
function getStats(nameTiers, scoreTiers) {
  // const nameTiers = fs.readFileSync('data/padawans.txt');
  // const scoreTiers = fs.readFileSync('data/padawans.txt');
  const padawanTiers = [];
  for (let i = 0; i < nameTiers; i++) {
    padawanTiers[i] = `${nameTiers[i]}, ${scoreTiers[i]}`;
  }
  return padawanTiers;
}


function writeStats (string) {

  // fs.appendFileSync('data/stats.txt', string);
}
