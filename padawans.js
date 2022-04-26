const fs = require('fs');


// getPadawanNames = ['Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani']
// getLightsaberScores = [99.9, 92, 87, 82]
// getStats = [
//   ['Revan', 99.9],
//   ['Bastila Shan', 92],
//   ['Jolee Bindo', 87],
//   ['Juhani', 82],
// ]

function getStats (){
  let arr = []
  const getPadawanNames = fs.readFileSync('data/padawans.txt', 'utf8');
  const getLightsaberScores = fs.readFileSync('data/scores.txt', 'utf8');

}


function writeStats (arr){
  fs.appendFileSync(_, getStats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
