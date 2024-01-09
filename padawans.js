const fs = require('fs')

function getPadawanNames () {
  const padawans = fs.readFileSync ('./data/padawans.txt', "utf-8").trim().split('\r\n')
  return padawans
}

function getLightsaberScores () {
  const scores = fs.readFileSync ('./data/scores.txt', "utf-8")
  return scores.split('\r\n').map ((el) => Number(el))
}

function getStats () {
  const padawans = getPadawanNames ();
  const scores = getLightsaberScores ();
  const results = scores.map ((el, i) => [padawans[i], el])
  return results
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
