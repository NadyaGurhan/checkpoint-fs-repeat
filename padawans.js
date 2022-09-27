const fs = require('fs');
const { type } = require('os');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

let nameOfPawawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
nameOfPawawans = nameOfPawawans.split('\n').slice(0, -1);

function getPadawanNames () {
  return nameOfPawawans;
};

let lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8');
lightsaberScores = lightsaberScores.split('\n');

function getLightsaberScores () {
  lightsaberScores = lightsaberScores.map((el) => +el);
  return lightsaberScores;
}

function getStats () {
  let statsOfPadawans = [];
  let allStats = [];
  for (let i = 0; i < nameOfPawawans.length; i ++) {
    allStats = [([nameOfPawawans[i] + ' ' + lightsaberScores[i]]).join(' ').split(' ')];
    statsOfPadawans.push(allStats);
    
  }
  return statsOfPadawans;
}
console.log(getStats());


//expect(stats).toEqual([
  // 21 |       ['Revan', 99.9],
  // 22 |       ['Bastila Shan', 92],

