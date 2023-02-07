const fs = require("fs");
module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
function getPadawanNames() {
  const filePath = './data/padawans.txt';
  const data = fs.readFileSync(filePath, 'utf8');
  data.split(' ')
  fs.writeFileSync(filePath, data);
}

