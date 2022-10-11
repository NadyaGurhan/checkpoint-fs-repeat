const fs = require('fs');

const PadawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8');

const getPadawanNames = () => {
  let arr = [];
  for (let i = 0; i <= PadawanNames.length; i += 1) {
    arr.push(PadawanNames);
  }
  return arr;
};

const getLightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8');
console.log(getLightsaberScores);



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
