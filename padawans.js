const fs = require('fs');
const padavansName = fs.readFileSync('./data/padawans.txt', 'utf-8');
// console.log(padavansName);

const padavansArr = padavansName.trim().split('\n');
// console.log(padavansArr);

function getPadawanNames() {
  const personArray = [];
  for (let i = 0; i < padavansArr.length; i += 1) {
    personArray.push(padavansName.name());
  }
  return personArray;
}

module.exports = {
  getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
};
