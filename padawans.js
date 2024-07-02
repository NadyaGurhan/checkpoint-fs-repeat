/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable space-before-blocks */
/* eslint-disable import/newline-after-import */
/* eslint-disable space-in-parens */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const fs = require('fs');
function getPadawanNames() {
  return fs.readFileSync('C:/Users/User/Desktop/Elbrus_HomeWork😭😍😜/Phase_1/Codes/D1/checkpoint-fs/data/padawans.txt', 'utf-8').split("\r\n").filter((s) => s !== '' )
}

function getLightsaberScores() {
  return fs.readFileSync('C:/Users/User/Desktop/Elbrus_HomeWork😭😍😜/Phase_1/Codes/D1/checkpoint-fs/data/scores.txt', 'utf-8').split('\r\n').filter((s) => s !== '' ).map((num) => Number(num))
}

function getStats(){
  const arr1 = getPadawanNames
  const arr2 = getLightsaberScores
  return arr1().map((items, index) => [items, arr2()[index]])
}

const stats = getStats()

function writeStats(){
  return fs.writeFileSync('./data/stats.txt', getStats().join('\n').replace(/,/g, ' '))
}

/* console.log(getPadawanNames());
console.log(getLightsaberScores());
console.log(getStats()); */

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

