const fs = require('fs');

const getPadawanNames = () => {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawanName = names.trim().split('\n');
  return padawanName;
};

const getLightsaberScores = () => {
  const grade = fs.readFileSync('./data/scores.txt', 'utf-8');
  const grades = grade.trim().split('\n').map((el) => +el);
  return grades;
};

const getStats = () => {
  const names = getPadawanNames();
  const grades = getLightsaberScores();
  const arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push([names[i], grades[i]]);
  }
  return arr;
};

const stats = getStats();

const writeStats = (data) => {
  let stats = data.join('\n');
  let stats1 = stats.replaceAll(',', ' ');
  fs.writeFileSync('./data/stats.txt', stats1, 'utf8');
  console.log(stats1);
};

writeStats(stats);

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
