const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf8'); // Не понимаю как обратиться к текст
  // const res = data.split('\n, ');
  const res = data.split('\n');
  const fliterName = res.filter((res) => ())
}
function getLightsaberScores() {

}
function getStats() {

}

function writeStats() {

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
