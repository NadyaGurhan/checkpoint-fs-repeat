const fs = require('fs');
const EOL = require('EOL');

function getPadawanNames() {
  const names = fs.readFileSync('../padawans.txt', 'utf8');
  const people = names.split(EOL);
  return people;
}

console.log(getPadawanNames());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
