const fs = require('fs');
let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
let scores = fs.readFileSync('./data/scores.txt', 'utf-8');
console.log(padawans);

function getPadawanNames () {
return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n')
}


function getLightsaberScores() {
return fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((a)=> +a)
}
console.log(getLightsaberScores());

function getStats () {
let Stats = [];
let padawansName =fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
let lightsaberScores =fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((a)=> +a);
for (let i= 0; i<padawansName.length; i++) {
 Stats.push([padawansName[i], lightsaberScores[i]]);
}
return Stats;
}

function writeStats () {
  let Stats = [];
  let padawansName =fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  let lightsaberScores =fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((a)=> +a);
  for (let i= 0; i<padawansName.length; i++) {
   Stats.push(`${padawansName[i]} ${lightsaberScores[i]} \n`);
  }
  return fs.writeFileSync('data/stats.txt', Stats.join(''));
  }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

