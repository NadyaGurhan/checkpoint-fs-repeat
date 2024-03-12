const fs = require('fs');
const { get } = require('http');
const path = require('path');

function getPadawanNames () {
  // const readResult = fs.readFileSync(
  //   path.join(__dirname, './data/padawans.txt'),
  //   'utf-8',);
  //   console.log(readResult.split('\" \"'));

    const readResult = fs.readFileSync(
      './data/padawans.txt',
      'utf-8');
    return readResult.split(" ");
}

function getLightsaberScores() {
  const scores = fs.readFileSync(
    './data/scores.txt',
    'utf-8');
  console.log(scores.split(" "));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
getPadawanNames();
getLightsaberScores();