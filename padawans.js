/* eslint-disable linebreak-style */
const fs = require('fs');
const { get } = require('http');

function getPadawanNames() {
  const readResult = fs.readFileSync(
    './data/padawans.txt',
    'utf-8',
  );
  const result = readResult.replaceAll(/\r/gi, '').trim().split('\n');
  return result;
}

function getLightsaberScores() {
  const scores = fs.readFileSync(
    './data/scores.txt',
    'utf-8',
  );
  const result = scores.replaceAll(/\r\n/gi, ' ').split(' ').map((el) => Number(el));
  return result;
}
function getStats() {
  const asd = [];
  const qwe = getPadawanNames();
  const zxc = getLightsaberScores();
  for (let i = 0; i < qwe.length; i++) {
    asd.push([qwe[i], zxc[i]]);
  }
  return asd;
}

function writeStats() {
  const input = getStats();
  fs.writeFileSync('./data/stats.txt', `${input.join("\n").replaceAll(",", " ")}`);
  console.log(input)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

writeStats();
