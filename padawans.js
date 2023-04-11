const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  const name = fs.readFileSync(
    path.join(__dirname, './data/padawans.txt'),
    'utf-8'
  );
  return name;
}

console.log(getPadawanNames());

const getLightsaberScores = () => fs.readFileSync(path.join(__dirname, './data/scores.txt'), 'utf-8');
console.log(getLightsaberScores());

const getStats = () => {
  const result = [];
  const padName = fs.readFileSync(
    path.join(__dirname, './data/padawans.txt'),
    'utf-8'
  );
  for (let i = 0; i <= padName; i += 1){

  }
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
