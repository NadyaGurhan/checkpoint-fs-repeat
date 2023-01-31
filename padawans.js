const fs = require('fs');

const getPadawanNames = () => {
  const inerTxt = fs.readFileSync('./data/padawans.txt', 'utf8');
  const trimTxt = inerTxt.trim();
  return trimTxt.split('\n');
};

const getLightsaberScores = () => {
  const inerNum = fs.readFileSync('./data/scores.txt', 'utf8');
  return inerNum.split('\n').map(function (element) {
    return Number(element);
  });
};

// const getStats = () => {
  // const inerTxtTwo = fs.readFileSync('./data/padawans.txt', 'utf8');
  // const inerNumTwo = fs.readFileSync('./data/scores.txt', 'utf8');

// };

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
