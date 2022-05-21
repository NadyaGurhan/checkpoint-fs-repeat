const fs = require('fs')

function getPadawanNames() {
  // const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawans = (fs.readFileSync('./data/padawans.txt', 'utf-8')).trim();
  const line = padawans.split('\n');
  return line;
}

function getLightsaberScores () {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').join(', ').split(', ');
  let result = scores;
  let finishedResult = [];
  result = result.forEach(x => {
    x = +x;
    finishedResult.push(x)
  })
  return finishedResult;
}

function getStats () {
  const padawans = (fs.readFileSync('./data/padawans.txt', 'utf-8')).trim().split('\n').join(', ').split(', ');;
  const scores = (fs.readFileSync('./data/scores.txt', 'utf-8')).trim().split('\n').join(', ').split(', ');;
  let result = [];
  for (let i = 0; i < padawans.length; i++) {
    result.push((`${padawans[i]}, ${scores[i]}`).split(', '));
    result[i][1] = +result[i][1];
  }
  return result;
}

function writeStats () {
let content = getStats().join('\n').replace(/,/g, ' ');
fs.writeFileSync('data/stats.txt', content);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
