const fs = require('fs');

function getPadawanNames() {
  const names = [];
  const text = fs.readFileSync('./data/padawans.txt', 'utf-8')
    .toString()
    .split('\n')
    .forEach((element) => {
      if (element !== '') {
        names.push(element);
      }
      return names;
    });
  return names;
}
// console.log(getPadawanNames());
const names = getPadawanNames();

function getLightsaberScores() {
  const scores = [];
  const score = fs.readFileSync('./data/scores.txt', 'utf-8')
    .toString()
    .split('\n')
    .forEach((element) => {
      if (element !== '') {
        scores.push(Number(element));
      }
      return scores;
    });
  return scores;
}
// console.log(getLightsaberScores());
const scores = getLightsaberScores();

function getStats() {
  const result = names.reduce((acc, elem, index) => {
    acc.push([elem, Number(scores[index])])
    return acc;
  }, []);
  return result;
}
// console.log(getStats());
function writeStats() {
  const result = names.reduce((acc, elem, index) => {
    acc.push([elem, Number(scores[index])])
    return acc;
  }, []);
  let data = result.join('\n').replace(/\,/g, ' ');
  console.log(data);
  return fs.writeFileSync('./data/stats.txt', data, () => console.log('file saved!'));
}
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
