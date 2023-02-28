const fs = require('fs');
// const text = fs.readFileSync(`${__dirname}/padawans.txt`, 'utf-8');
// console.log(text);


const text = (`Revan, Bastila Shan, Jolee Bindo, Juhani`);
const arrayPadawans = text.split(', ');
const scores = (`99.9, 92, 87, 82`);
const scoresArray = scores.split(', ');
// console.log(scores);

function getPadawanNames() {
  return  arrayPadawans;
}
function getLightsaberScores() {
  const newArr = scoresArray.map((el) => +el);
  return newArr;

}
function getStats() {
  const newArr = scoresArray.map((el) => +el);
  const statsArr = arrayPadawans.map((el,i) => `${el}, ${newArr[i]}`);
  // const result = statsArr.split(', ');
  return statsArr;
}
console.log(getStats());

function writeStats() {
  const newArr = scoresArray.map((el) => +el);
  const statsArr = arrayPadawans.map((el,i) => `${el} ${newArr[i]}`);
  fs.writeFileSync(`data/stats.txt`, `${statsArr}\n`, 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
