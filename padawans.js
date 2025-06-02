const fs = require('fs');
const { EOL } = require('os');
const path = require('path');


function getPadawanNames() {
  const filesPath = path.join('data', 'padawans.txt');
  const content = fs.readFileSync(filesPath, 'utf-8');
  const lines = content.split(EOL);
  const result = [];
  for (const line of lines) {
    if (line) result.push(line);
  }
  return result;

}

function getLightsaberScores() {
  const filesPath = path.join('data', 'scores.txt');
  const content = fs.readFileSync(filesPath, 'utf-8');
  return content.split(EOL).filter(Boolean).map(Number);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < names.length; i++) {
    result.push([names[i], scores[i]]);
  }
  return result;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
