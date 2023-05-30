const fs = require('fs');

const getPadawanNames = () => {
  const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
  return padawans
    .trim()
    .split('\n');
};

const getLightsaberScores = () => {
  const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8')
    .split('\n').map((el) => +el);
  return scores;
};

const getStats = () => {
  const scores = getLightsaberScores();
  const padawans = getPadawanNames();
  const result = [];
  for (let i = 0; i < padawans.length; i += 1) {
    result.push(`${padawans[i]} , ${scores[i]}`);
  }
  console.log(result);
};

const writeStats = () => {

};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
