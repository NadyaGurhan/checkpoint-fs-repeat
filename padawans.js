const fs = require('fs');

const getPadawanNames = () => {
  const names = fs.readdirSync('./data/padawans.txt');
  return names;
};

const getLightsaberScores = () => {
  const names = fs.readdirSync('./data/scores.txt');
  return names;
};

// const getStats = () => {
//   const names = fs.readdirSync('./data/padawans.txt');
//   const scores = fs.readdirSync('./data/scores.txt');
//   const stats = 
// }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
