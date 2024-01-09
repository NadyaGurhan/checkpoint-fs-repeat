const fs = require('fs');

function getPadawanNames() {
  const padawanInfo = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf8');
  const splitRes = padawanInfo.split('\n');
  splitRes.pop();
  return splitRes;
}


function getLightsaberScores() {
  const scoresInfo = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf8');
  const splitRes = scoresInfo.split('\n');
  const final = parseInt(splitRes);
  return final;
}

function getStats() {

}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
