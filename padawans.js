const fs = require('fs');

function getPadawanNames() {
  const nameList = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  nameList.pop();
  return nameList;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  const scoreList = [];
  scores.forEach((score) => {
    scoreList.push(parseFloat(score, 10));
  });
  return scoreList;
}

function getStats() {
  const scores = getLightsaberScores();
  const padawans = getPadawanNames();
  const scoreboard = [];
  for (let i = 0; i < scores.length; i += 1) {
    const entry = [];
    entry.push(padawans[i], scores[i]);
    scoreboard.push(entry);
  }
  return scoreboard;
}

function writeStats() {
  fs.writeFileSync('./data/stats.txt', '');
  const scoreboard = getStats();
  for (let i = 0; i < scoreboard.length - 1; i += 1) {
    const line = `${scoreboard[i][0]} ${scoreboard[i][1]}\n`;
    fs.appendFileSync('./data/stats.txt', line);
  }
  fs.appendFileSync('./data/stats.txt', `${scoreboard[scoreboard.length - 1][0]} ${scoreboard[scoreboard.length - 1][1]}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
