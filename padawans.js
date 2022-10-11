const fs = require('fs');

function getPadawanNames() {
  const names = 'Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani';
  const getNames = fs.writeFileSync('./data/padawans.txt', names.toString());
  const name = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return [name];
}
// const names = getPadawanNames(['Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani']);

// function getLightsaberScores() {
//   const getNames = fs.writeFileSync('/data/scores.txt');
//   return fs.readFileSync('/data/scores.txt', 'utf-8');
// }

// function getStats() {

// }

module.exports = {
  getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
};
