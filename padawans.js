const fs = require('fs');
const { resourceLimits } = require('worker_threads');
let padawansList = fs.readFileSync('./data/padawans.txt', 'utf-8');
padawansList = padawansList.split('\n');
let scoresList = fs.readFileSync('./data/scores.txt', 'utf-8');
scoresList = scoresList.split('\n');
//console.log(padawansList);

function getPadawanNames () {
  padawansList.pop();
  return padawansList;
}

function getLightsaberScores () {
  let result = [];
  for (let i = 0; i < scoresList.length; i++) {
    let prom = +scoresList[i];
    result.push(prom);
  }
  return result;
}

function getStats () {
/*   let resultArray = [];
  let promArray = [];
  for (let i = 0; i < scoresList.length; i++) {
    let prom = +scoresList[i];
    promArray.push(padawansList[i]);
    promArray.push(scoresList[i]);
    resultArray.push(promArray);
  }
  return resultArray; */
}

function writeStats () {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
