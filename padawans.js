const fs = require('fs');

function getPadawanNames() {
  const contents = fs.readFileSync('data/padawans.txt', 'utf-8');
  const array = contents.split('\n');
  array.pop();
  return array;
}

function getLightsaberScores() {
  const contents = fs.readFileSync('data/scores.txt', 'utf-8');
  const array = contents.split('\n');
  return array.map((el) => Number(el));
}

function getStats() {
  const person = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];
  for (let i = 0; i <= person.length; i += 1) {
    result.push([person[i], scores[i]]);
  }
  result.pop();
  return result;
}

function writeStats() {
  // let data = `${getPadawanNames()} + ${getLightsaberScores()} + \n`
  const stats = getStats();
  for (let elem of stats) {
    let string = `${elem.join(' ')}\n`;
    fs.appendFileSync('data/stats.txt', string);
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
