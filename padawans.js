/* eslint-disable no-const-assign */
/* eslint-disable quotes */
/* eslint-disable prefer-template */
/* eslint-disable no-unreachable */
/* eslint-disable no-plusplus */
/* eslint-disable semi-spacing */
/* eslint-disable eol-last */
/* eslint-disable arrow-parens */
/* eslint-disable arrow-spacing */
/* eslint-disable prefer-const */
/* eslint-disable import/newline-after-import */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
const fs = require('fs');

function getPadawanNames() {
  let padawans;
  return padawans = fs.readFileSync('data/padawans.txt', 'utf-8').trim().split('\r\n');
}

function getLightsaberScores() {
  let rating = '';
  rating = fs.readFileSync('data/scores.txt', 'utf-8').split('\r\n');
  for (let i = 0; i < rating.length; i++) {
    rating[i] = Number(rating[i]);
  }
  return rating;
}

function getStats() {
  let padawans = '';
  let rating = '';
  const arrPadRat = [];
  padawans = fs.readFileSync('data/padawans.txt', 'utf-8').trim().split('\r\n');
  rating = fs.readFileSync('data/scores.txt', 'utf-8').split('\r\n');
  for (let i = 0; i < padawans.length; i++) {
    rating[i] = Number(rating[i]);
    arrPadRat.push(padawans[i].split(','));
    arrPadRat[i].push(rating[i]);
  }
  return arrPadRat;
}

function writeStats() {
  let padawans = '';
  let rating = '';
  const arrPadRat = [];
  let str = '';
  let arrStr = [];
  padawans = fs.readFileSync('data/padawans.txt', 'utf-8').trim().split('\r\n');
  rating = fs.readFileSync('data/scores.txt', 'utf-8').split('\r\n');
  for (let i = 0; i < padawans.length; i++) {
    rating[i] = Number(rating[i]);
    arrPadRat.push(padawans[i].split(','));
    arrPadRat[i].push(rating[i]);
  }
  arrStr = arrPadRat.map(el => el.join(' '));
  str = arrStr.join('\n');
  fs.appendFileSync('data/stats.txt', str);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};