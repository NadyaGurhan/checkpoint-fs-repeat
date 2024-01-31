const { log } = require('console');
const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  const res = padawans.split('\n');
  return res;
}

function getLightsaberScores() {
  const point = fs.readFileSync('./data/scores.txt', 'utf8');
  const res = point.split('\n').map(Number);
  return res;
}
//console.log(getLightsaberScores());

// const keys  = getPadawanNames();
//console.log(keys);
// const values = getLightsaberScores();
//console.log(values);

// let obj = {};
//  const res = keys.forEach((key, index) => {
// obj[key] = values[index]
// });
//console.log(res)
//console.log(obj)

function getStats() {
  const keys  = getPadawanNames();
  const values = getLightsaberScores();

  let obj = {};
 const res = keys.forEach((key, index) => {
obj[key] = values[index]
});
return obj;
};
// console.log(getPadawanNames());
// console.log(getLightsaberScores());
//console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
};
