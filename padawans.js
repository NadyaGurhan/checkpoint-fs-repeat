const fs = require('fs');

function getPadawanNames() {
  let names = fs.readFileSync('data/padawans.txt', 'utf8');
  return names.split('\n').slice(0,-1);
}

function getLightsaberScores() {
  const scores = fs.readFileSync('data/scores.txt', 'utf8');
  return scores.split('\n').map((el) => Number(el));
}

console.log(getPadawanNames());

function getStats() {
  const names = fs.readFileSync('data/padawans.txt', 'utf8');
  const scores = fs.readFileSync('data/scores.txt', 'utf8');
  const names_arr = names.split('\n').slice(0,-1);
  const scores_arr = scores.split('\n').map((el) => Number(el));
  let fin = [];

  for (let i = 0; i < names_arr.length; i++) {
    fin.push([]);
    fin[i].push(names_arr[i], scores_arr[i]);
  }

  return fin;
}

function writeStats() {
  const stats = getStats();
  const str = stats.map((el) => el.join(' ')).join('\n');

  fs.writeFileSync('data/stats.txt', str);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


