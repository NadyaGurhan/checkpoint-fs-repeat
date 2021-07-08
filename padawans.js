const fs = require('fs');

let filepath = './data/padawans.txt';
let filepath2 = './data/scores.txt';


function getPadawanNames () {
  let data = fs.readFileSync(filepath, 'utf8');
  return data.slice(0, -1).split('\n');
}

function getLightsaberScores () {
  let data = fs.readFileSync(filepath2, 'utf8');
  return data.split('\n').map(el => +el);
}

function getStats () {
  const jedi = getPadawanNames();
  const score = getLightsaberScores ();
  const result = jedi.map((el, i) => ([el, score[i]]));
  return result;
}

function writeStats () {
  let result = '';
  const statsArr = getStats();
  result = statsArr.map(el => el.join(' ')).join('\n')
  fs.writeFileSync('data/stats.txt', result)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
