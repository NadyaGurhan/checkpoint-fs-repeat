const fs = require('fs');

const path = require('path');

function getPadawanNames() {
  const filePath = path.resolve(__dirname, 'data', 'padawans.txt');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const padawans = fileContent.trim().split('\n');
  return padawans;
}

function getLightsaberScores() {
  const filePath = path.resolve(__dirname, 'data', 'scores.txt');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const score = fileContent.trim().split('\n');
  let rez = score.map((el) => Number(el));
  return rez;
}
getLightsaberScores();
function getStats() {
  const filePadawans = path.resolve(__dirname, 'data', 'padawans.txt');
  const filePadaContent = fs.readFileSync(filePadawans, 'utf-8');
  const fileScores = path.resolve(__dirname, 'data', 'scores.txt');
  const fileScorContent = fs.readFileSync(fileScores, 'utf-8');
  let padawans = filePadaContent.trim().split('\n');
  const score = fileScorContent.trim().split('\n');
  const stats = [];

  for (let i = 0; i < padawans.length; i += 1) {
    stats[i] = [padawans[i], Number(score[i])];
  }

  // console.log(stats);
  return stats;
}

function writeStats() {
  let arr = [];
  arr = getStats();
  for (let i = 0; i < arr.length; i += 1) {
    if (i < arr.length - 1) {
      fs.appendFileSync('./data/stats.txt', `${arr[i].join(' ')}\n`);
    } else {
      fs.appendFileSync('./data/stats.txt', `${arr[i].join(' ')}`);
    }
  }
  //console.log(arr[2].join(' '));
  return;
}
//writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
