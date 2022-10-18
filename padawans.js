const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  const dataText = fs.readFileSync('./data/padawans.txt', 'utf8');
  const res = dataText.trim().split('\n');
  return (res);
}
function getLightsaberScores() {
  const numb = fs.readFileSync('./data/scores.txt', 'utf8');
  const result = numb.trim().split('\n');
  // const ress = result.forEach((element) => parseInt(element));
  const ress = [];
  for (let i = 0; i < result.length; i++) {
    ress.push(Number(result[i]));
  }
  return ress;
  console.log(ress);
}
getLightsaberScores();
function getStats() {

}
function writeStats() {

}
