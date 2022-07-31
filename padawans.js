const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const namesStr = fs.readFileSync('data/padawans.txt', 'utf8');
  const namesArr = namesStr.trim().split('\n');

  return namesArr;
}

function getLightsaberScores() {
  const scoresStr = fs.readFileSync('data/scores.txt', 'utf8');

  const scoresArr = scoresStr.trim().split('\n');

  const arrOfNum = scoresArr.map((el) => +(el));

  return arrOfNum;
}
let result1 = [];

function getStats() {
  const result1 = [];

  const names = getPadawanNames();
  const scores = getLightsaberScores();

  result1.push(names[0], scores[0]);

  const result2 = [];

  result2.push(names[1], scores[1]);

  const result3 = [];
  result3.push(names[2], scores[2]);

  const result4 = [];
  result4.push(names[3], scores[3]);

  const statsArr = [];
  statsArr.push(result1, result2, result3, result4);
  return statsArr;
}

function writeStats(stats) {
  if (fs.existsSync('./data/stats.txt')) {
    fs.unlinkSync('./data/stats.txt');
  }
  const NEWstats = getStats();

  const result1 = NEWstats[0].join(' ');
  const result2 = NEWstats[1].join(' ');
  const result3 = NEWstats[2].join(' ');
  const result4 = NEWstats[3].join(' ');

  const newData = [];

  newData.push(result1, result2, result3, result4);

  const filePath = 'data/stats.txt';
  const data = newData.join('\n');

  return fs.appendFileSync(filePath, data, 'utf-8');
}
