const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const a = fs.readFileSync('./data/padawans.txt', 'utf-8').split(EOL).slice(0, -1);
  return a;
}
console.log(getPadawanNames());

function getLightsaberScores() {
  const arr = [];
  const b = fs.readFileSync('./data/scores.txt', 'utf-8').split(EOL);
  for (let i = 0; i < b.length; i++) {
    b[i] = Number(b[i]);
    arr.push(b[i]);
  }
  return arr;
}
console.log(getLightsaberScores());

function getStats() {
  const e = [];
  const c = fs.readFileSync('./data/scores.txt', 'utf-8').split(EOL);
  const d = fs.readFileSync('./data/padawans.txt', 'utf-8').split(EOL).slice(0, -1);

  for (let i = 0; i < d.length; i++) {
    const arr = [];
    for (let j = 0; j < c.length; j++) {
      if (i === j) {
        c[j] = Number(c[j]);
        arr.push(d[i], c[j]);
      }
    }
    e.push(arr);
  }
  return e;
}
console.log(getStats());

function writeStats(stats) {
  console.log(stats);
  
  const data = stats.map(el => el.join(' ')).join('\n')
  console.log(data)
  fs.writeFileSync( 'data/stats.txt', data, 'utf-8');
}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
