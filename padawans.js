const fs = require('fs');
const files = fs.readdirSync('./data');
// console.log(files);
const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
// console.log(typeof names);

const getPadawanNames = () => {
  const arrName = [];
  arrName.push(names.split('\n'));
  return arrName;
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
