const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', { encoding: 'utf-8' }).trim().split('\n');
  return padawans;
}
console.log(getPadawanNames())

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', { encoding: 'utf-8' }).split('\n');
  return scores;
}
function getStats() {
  const res = [];
  const padawans = fs.readFileSync('./data/padawans.txt', { encoding: 'utf-8' }).trim().split('\n');
  padawans.pop();
  const scores = fs.readFileSync('./data/scores.txt', { encoding: 'utf-8' }).split('\n');
  for (let i = 0; i < padawans.length; i += 1) {
    res.push([padawans[i]]);
  }
  res.map((el, i) => {
    el.push(+scores[i]);
  });
  return res;
}

function writeStats() {
  const res = [];
  const padawans = fs.readFileSync('./data/padawans.txt', { encoding: 'utf-8' }).trim().split('\n');
  padawans.pop();
  const scores = fs.readFileSync('./data/scores.txt', { encoding: 'utf-8' }).split('\n');
  for (let i = 0; i < padawans.length; i += 1) {
    res.push([padawans[i]]);
  }
  res.map((el, i) => {
    el.push(+scores[i]);
    let data = `${el.join()}\n`;
    fs.appendFileSync('./stats.txt', data, 'utf-8');
  });

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
