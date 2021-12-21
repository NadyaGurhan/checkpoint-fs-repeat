const fs = require('fs');
const padawans = fs.readFileSync( __dirname + '/data/padawans.txt', "utf8")
const scores = fs.readFileSync( __dirname + '/data/scores.txt', "utf8")
//const stat = fs.readFileSync( __dirname + '/data/stats.txt', "utf8")

function getPadawanNames() {
  const names = padawans.trim().split('\n')
   
  return names
}

function getLightsaberScores() {
  const names = scores.split('\n').map (i => +i)

  return names
}

function getStats() {
  const padnames = padawans.trim().split('\n')
  const scoresnames = scores.split('\n').map (i => Number(i))
  stats = []
  for(let i=0;i<padnames.length;i++){
    stats.push([padnames[i],scoresnames[i]]);
 }
 result = stats.toString('\n')
 //fs.writeFileSync( 'stats.txt', result, 'utf-8')
 return stats
}


function writeStats() {
  const padnames = padawans.split('\n').filter(Boolean)
  const scoresnames = scores.split('\n').map (i => Number(i))
  data = []
  for(let i=0;i<padnames.length;i++){
    data.push([padnames[i] + ' ' + scoresnames[i]]);
 }
 result = data.toString('\n').split(",").join("\n")
 fs.writeFileSync( __dirname + '/data/stats.txt', result, 'utf-8')
 return data
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
