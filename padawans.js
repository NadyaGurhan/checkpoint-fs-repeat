const fs = require('fs');
const names = fs.readFileSync('data/padawans.txt', 'utf-8').split(`\n`).filter(el => el !== '');
const scoresString = fs.readFileSync('data/scores.txt', 'utf-8').split(`\n`).filter(el => el !== '');

let scores = [];
for(let i = 0; i < scoresString.length; i += 1) {
  scores[i] = Number(scoresString[i]);
}

function getPadawanNames() {
  return names;
}
function getLightsaberScores() {
  return scores;
}
function getStats() {
  let table = [];
  for(let i = 0; i < names.length; i += 1) {
    let row = [];
    row.push(names[i]);
    row.push(scores[i]);
    table.push(row);
  }
  return table;
}
/*function writeStats(table) {
  let i = 0;
  while (i < table.length - 1) {
    fs.appendFileSync('data/stats.txt', `${table[i][0]} ${table[i][1]}\n`);
    i += 1
  }
  fs.appendFileSync('data/stats.txt', `${table[i][0]} ${table[i][1]}`);
}*/

function writeStats(table) {
  let string = '';
  for (let i = 0; i < table.length; i += 1) {
    for(let j = 0; j < table[i].length; j += 1) {
      if(j === table[i].length - 1) {
        string += `${table[i][j]}`
      } else {
        string += `${table[i][j]} `;
      }
    }
    if(i < table.length - 1) {
      string += `\n`;
    }
  }
  fs.writeFileSync('data/stats.txt', string);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
