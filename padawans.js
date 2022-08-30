const fs = require('fs');
// fs не подключился
const filePath = './data/padawans.txt';
const data = fs.readFileSync(filePath, 'utf8');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  return data.split('\n');
}
