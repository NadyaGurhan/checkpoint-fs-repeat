const fs = require('fs');
const arr = require('../p1-random-profile-generator/generatePerson');
const padawans = fs.readFileSync( __dirname + '/data/padawans.txt', "utf8")
const scores = fs.readFileSync( __dirname + '/data/scores.txt', "utf8")
//const stat = fs.readFileSync( __dirname + '/data/stats.txt', "utf8")

function getPadawanNames() {
  const names = padawans.split('\n').filter(Boolean)
   
  return names
}

function getLightsaberScores() {
  const names = scores.split('\n').map (i => +i)

  return names
}

function getStats() {
  const padnames = padawans.split('\n').filter(Boolean)
  const scoresnames = scores.split('\n').map (i => +i)
  stats = []
  for(let i=0;i<padnames.length;i++){
    stats.push([padnames[i],scoresnames[i]]);
 }
 result = stats.toString('\n')
 fs.writeFileSync( 'stats.txt', result, 'utf-8')
 return stats
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  //writeStats,
};
