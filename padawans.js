const fs = require('fs');

function getPadawanNames() {
  let text = fs.readFileSync(__dirname+'/data/padawans.txt','utf8');
  let spl = text.split('\n');
  let pads = spl.slice(0, -1);
  return pads;
}
// console.log(getPadawanNames());

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
