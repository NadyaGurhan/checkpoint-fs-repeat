const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const newArr = fs.readFileSync('./data/padawans.txt', 'utf-8').split(`${EOL}`);
  return newArr.filter((e) => e !== '');
}

function getLightsaberScores() {
  const newArr = fs.readFileSync('./data/scores.txt', 'utf-8').split(`${EOL}`);
  return newArr.map((el) => +el);
}

function getStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split(`${EOL}`);
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split(`${EOL}`);
  const table = [];
  for (let i = 0; i < scores.length; i += 1) {
    const arr = [];
    arr.push(padawans[i]);
    arr.push(+scores[i]);
    table.push(arr);
  }
  return table;
}

function writeStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split(`${EOL}`);
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split(`${EOL}`);
  let str = '';
  for (let i = 0; i < scores.length; i += 1) {
    if (i === scores.length - 1) {
      str += `${padawans[i]} ${scores[i]}`;
    } else {
      str += `${padawans[i]} ${scores[i]}\n`;
    }
  }
  return fs.writeFileSync('./data/stats.txt', str);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
