const fs = require('fs');

const getPadawanNames = () => fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');

function getLightsaberScores() {
  const processData = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf8');
  const dataArr = processData.split('\n');
  for (let i = 0; i < dataArr.length; i++) {
    dataArr[i] = Number(dataArr[i]);
  }
  return dataArr;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const finalArr = [];
  for (let i = 0; i < padawans.length; i++) {
    finalArr.push([padawans[i], scores[i]]);
  }
  return finalArr;
}

const writeStats = () => {
  const stats = getStats();
  const formattedData = stats.map(([name, score]) => `${name} ${score}`).join('\n');
  fs.writeFileSync('./data/stats.txt', formattedData, 'utf-8');
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
