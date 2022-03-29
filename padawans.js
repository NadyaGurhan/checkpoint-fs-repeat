const fs = require('fs');

const padawansNames = fs.readFileSync('data/padawans.txt', 'utf-8');
const sabers = fs.readFileSync('data/scores.txt', 'utf-8');
console.log(padawansNames);
console.log(sabers);

function getPadawanNames() {
  const pNames = padawansNames.trim().split('\n');
  console.log(pNames);
  return pNames;
}

function getLightsaberScores() {
  const lightSabers = sabers.trim().split('\n');
  for (let i = 0; i < lightSabers.length; i++) {
    lightSabers[i] = +lightSabers[i];
  }
  console.log(lightSabers);
  return lightSabers;
}

function getStats() {
  const pNames = padawansNames.trim().split('\n');
  const lightSabers = sabers.trim().split('\n');
  const result = [];
  for (let i = 0; i < pNames.length; i++) {
    result.push(pNames.slice(i, i + 1).concat(+lightSabers.slice(i, i + 1)));
  }
  // console.log(result);
  return result;
}

console.log(getStats().join('\n'));

function writeStats() {
  let data = getStats().reduce((acc, el) => `${acc}${el.join(' ')}\n`, '');
  data = data.slice(0, data.length - 1);
  fs.writeFileSync('data/stats.txt', `${data}`);
  // let data = fs.writeFileSync(`${newFile}`, `${data}`);
  // data = getStats().join('\n');
  // fs.appendFileSync(newFile, data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
