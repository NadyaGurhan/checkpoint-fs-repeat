const fs = require('fs');

const getPadawanNames = () => {
  const read = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return read.trim().split('\n');
};

const getLightsaberScores = () => {
  const read = fs.readFileSync('./data/scores.txt', 'utf-8');
  const read2 = read.trim().split('\n');
  return read2.map((elem) => Number(elem));
};

const getStats = () => {

};

const writeStats = () => {

};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
