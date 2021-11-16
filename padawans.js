

const fs = require('fs');


function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').splice(0, 4);
  return padawans;
}


function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  return scores;
}



function getStats() {
  let array = [];
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < 4; i++) {
    let arr = [];
    arr.push(padawans[i], scores[i]);
    array.push(arr)
  }
  return array;
}

function writeStats() {
  const stats = getStats();
  const filePath = './data/stats.txt';
  const txtData = stats.join('\n').replaceAll(',', ' ')
  return fs.writeFileSync(filePath, txtData)
}

// function writeStats() {
//   return fs.writeFileSync(
//     './data/stats.txt',
//     `${getStats().join('\n').replaceAll(',', ' ')}`,
//   );
// };

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
}
