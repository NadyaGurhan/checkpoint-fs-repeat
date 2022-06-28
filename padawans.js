module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const fs = require('fs');

// console.log(padawans);

function getPadawanNames() {
  let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return padawans.split('\n');
}
//* Не сразу понял как какждый элемент перевести в number
function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const getScore = scores.split('\n');
  return getScore.map((el) => Number(el));
}
//* Вывел результат в массив, но не успел вывести каждую коллекцию в подмассив
function getStats() {
  let result = [];
  const pad = getPadawanNames();
  const score = getLightsaberScores();
  for (let i = 0; i < pad.length; i++) {
    result.push(pad[i], score[i]);
  }
  return result;
}

// console.log(getStats());

function writeStats() {}
