const fs = require('fs');

const getPadawanNames = () => {
  return fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
}
const getLightsaberScores = () => {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').trim().split('\n').map(elem => Number(elem));
  return scores;
}

const getStats = () => {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < names.length; i++) {
    result.push([names[i], scores[i]]);
  }
  return result;
}
const writeStats = () => {
  const result = getStats();
  let str = '';
  for (let i = 0; i < result.length; i++) {
    i === result.length-1 ? str += `${result[i][0]} ${result[i][1]}` : str += `${result[i][0]} ${result[i][1]} \n`
  }
  fs.writeFileSync('./data/stats.txt', str);
  console.log('strResult', str);
  return str;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
