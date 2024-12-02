const { log } = require('console');
const fs = require('fs')
const { EOL } = require('os');

function getPadawanNames() {
  const names = fs.readFileSync(`data/padawans.txt`, `utf-8`)
  return names.split('\n').slice(0, -1)
}

function getLightsaberScores() {
  const score = fs.readFileSync(`data/scores.txt`, `utf-8`)
  return score.split('\n').map(Number)
}

function getStats() {
  let result = []
  const get = getPadawanNames()
  const score = getLightsaberScores()
  for (let i = 0; i <get.length; i ++ ) {
    result.push([get[i], score[i]])
  }
  return result

}
console.log(getStats());


function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
