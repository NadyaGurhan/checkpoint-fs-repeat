const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const fileNames = './data/padawans.txt';
  const fileContent1 = fs.readFileSync(fileNames, 'utf8');
  const result1 = fileContent1.split('\n');
  return result1;
}

function getLightsaberScores() {
  const fileLights = './data/scores.txt';
  const fileContent2 = fs.readFileSync(fileLights, 'utf8');
  const result2 = fileContent2.split('\n');
  return result2;
}
