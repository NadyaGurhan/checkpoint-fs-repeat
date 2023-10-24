const fs = require('fs');

const dataName = fs.readFileSync('./data/padawans.txt', 'utf-8');

function getPadawanNames() {
  let newArr = dataName.split('\n');
  const newArr1 = newArr.splice(4)
  return newArr;
}
console.log(getPadawanNames());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
