const fs = require('fs')


function getPadawanNames() {
  const read = fs.readFileSync('./data/padawans.txt', 'utf-8');

  return read.trim().split('\n');
}


// getPadawanNames();


function getLightsaberScores() {
  const lightsabersRead = fs.readFileSync('./data/scores.txt', 'utf-8');
  // console.log(lightsabersRead)
  return lightsabersRead.trim().split('\n').map((el) => +el);
}


// getLightsaberScores();




function getStats() {
  const Arr = []
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < (names.length, scores.length); i++) {
    Arr.push([`${names[i]}, ${scores[i]}`]);
  }
  return Arr;
}







function writeStats() {




}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
