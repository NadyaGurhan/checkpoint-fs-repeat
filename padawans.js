const fs = require('fs');

function getPadawanNames() {
  const read = fs.readFileSync('./data/padawans.txt', 'utf-8');

  return read.trim().split('\n');
}

getPadawanNames();

function getPadawanScores() {
  const lightsabersRead = fs.readFileSync('./data/scores.txt', 'utf-8');
  // console.log(lightsabersRead)
  return lightsabersRead.trim().split('\n').map((el) => +el);
}

getPadawanScores();





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
