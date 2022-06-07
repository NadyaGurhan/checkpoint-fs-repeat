const fs = require('fs');

// const padawanNames = Array.from(fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n'));
// console.log(padawanNames);
// const padNames2 = [];
// // for (let i = 0; i < padawanNames.length; i++) {
// //   if(padawanNames[i] !== '') { padNames2.push(padNames2)}
// // }

const lightsaberScores = Array.from(fs.readFileSync('./data/scores.txt', 'utf-8').split('\n'));
for (let i = 0; i < lightsaberScores.length; i++) {
  lightsaberScores[i] = Number(lightsaberScores[i]);
}

const padawanNames = Array.from(fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n'));
padawanNames.splice(4, 1);// 
let stats = [];
for(let i = 0; i < padawanNames.length; i++){
  let arr = [];
  arr.push(padawanNames[i]);
  arr.push(lightsaberScores[i]);
  stats[i] = arr;
}

console.log(stats);

function getPadawanNames() {
  const padawanNames = Array.from(fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n'));
  padawanNames.splice(4, 1);// (

  return padawanNames;
}

function getLightsaberScores() {
  const lightsaberScores = Array.from(fs.readFileSync('./data/scores.txt', 'utf-8').split('\n'));
  for (let i = 0; i < lightsaberScores.length; i++) {
    lightsaberScores[i] = Number(lightsaberScores[i]);
  }

  return lightsaberScores;
}


function getStats() {
  const lightsaberScores = Array.from(fs.readFileSync('./data/scores.txt', 'utf-8').split('\n'));
  for (let i = 0; i < lightsaberScores.length; i++) {
    lightsaberScores[i] = Number(lightsaberScores[i]);
  }

  const padawanNames = Array.from(fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n'));
  padawanNames.splice(4, 1);// 

  let stats = [];
for(let i = 0; i < padawanNames.length; i++){
  let arr = [];
  arr.push(padawanNames[i]);
  arr.push(lightsaberScores[i]);
  stats[i] = arr;
}
return stats;
}

function writeStats() {

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
