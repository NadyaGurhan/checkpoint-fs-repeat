const fs = require('fs')
const data = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf8');
const data1 = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf8');

function getPadawanNames() {
  return data.split('\n').slice(0,-1);
}

function getLightsaberScores() {
  const res = data1.split('\n');
  const resF = res.map((el)=>Number(el));
  return (resF);
}

function getStats() {
  const arr = data.split('\n');
  const arr1 = data1.split('\n');
  return ();
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
