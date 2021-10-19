const fs = require('fs');

const getPadawanNames = () => {
  const listPada = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return listPada;
};

const getLightsaberScores = () => {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const mapin = scores.map(Number);
  return mapin;
};
const getStats = () => {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const newAr = [];
  const mapin = scores.map(Number);
  for (let i = 0; i < scores.length; i++) {
    newAr.push(padawans[i], Number(scores[i]));
  }
  return newAr;
}
getStats();

const writeStats = (pada, stats) => {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
