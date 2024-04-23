const fs = require('fs');

function getPadawanNames() {
  const padNames = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf8');
  const arrReturn = padNames.split('\r\n');
  arrReturn.pop();
  return arrReturn;
}

function getLightsaberScores() {
  const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf8');
  const arrReturn = scores.split('\r\n');
  for (let i = 0; i < arrReturn.length; i++) {
    arrReturn[i] = Number(arrReturn[i]);
  }
  return arrReturn;
}
console.log(getLightsaberScores());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
