
const fs = require('fs');
const { get } = require('http');


function getPadawanNames(filename = 'data/padawans.txt') {

  let names = fs.readFileSync(filename, 'utf8').split('\n')
  names.pop()
  return names

}

function getLightsaberScores(filename = 'data/scores.txt') {

  let names = fs.readFileSync(filename, 'utf8').split('\n')
  return names.map((el => +el))


}

function getStats() {
  let names = getPadawanNames()
  let scores = getLightsaberScores()

  return names.map((el, i) => ([el, scores[i]]));



}





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};



