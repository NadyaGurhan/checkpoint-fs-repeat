const fs = require('fs')

function getPadawanNames() {
  // const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const line = padawans.split('\n');
  line.splice(-1, 1);
  console.log(line);
  return line;
}

function getLightsaberScores () {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  let line = scores.split('\n').join(', ');
  console.log(line);
  const result = line.split(', ');
  console.log(result);
  return result;

}

getLightsaberScores ()

function getStats () {

}

function writeStats () {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
