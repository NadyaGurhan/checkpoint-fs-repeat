const fs = require('fs');

const getPadawanNames = () => {
  const content = fs.readFileSync('data/padawans.txt', 'utf-8')
    .split(/\r?\n/);

  return content;
};

const getLightsaberScores = () => {
  const content = fs.readFileSync('data/scores.txt', 'utf-8').split(/\r?\n/);
  const result = content.map(Number);

  return result;
};

const getStats = () => {
  const resultArr = [];
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < padawans.length; i++) {
    resultArr.push([padawans[i], scores[i]]);
  }

  return resultArr;
};

const writeStats = () => {
  const filePath = './data/stats.txt';
  let data = '';
  const stats = getStats();
  stats.forEach((element) => {
    const tempValue = element.join(' ');
    data += `${tempValue}\n`;
  });

  fs.writeFileSync(filePath, data.slice(0, -1));
};

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
