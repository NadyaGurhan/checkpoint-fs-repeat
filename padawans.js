const fs = require('fs');
function getPadawanNames() {
    let padawansInfo = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1);
    return padawansInfo;
};

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf8').split('\n').filter((el) => el.length).map((el) => Number(el));
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
