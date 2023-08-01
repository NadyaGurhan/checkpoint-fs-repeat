const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const file = './data/padawans.txt'
  const fileContent = fs.readFileSync(file, 'utf8');
  const result = fileContent.split('\n');
  return result;
}
