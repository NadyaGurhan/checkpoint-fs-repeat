const padawans = require('padawans.txt');
const score = require.apply('score.txt')

function getPadawanNames() {
  let names = padawans.split(', ');
  return names;
} 

function getLightsaberScores() {
  let names = score.split(', ')
  return names;
}
