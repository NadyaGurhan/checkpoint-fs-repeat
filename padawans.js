const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const content = fs.readFileSync('./data/padawans.txt', 'utf8');
  return content.trim().split(EOL);
}

function getLightsaberScores() {
  const content = fs.readFileSync('./data/scores.txt', 'utf8');
  return content
    .trim()
    .split(EOL)
    .map((el) => Number(el));
}

function getStats() {
  const name = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < name.length; i++) {
    result.push([name[i], scores[i]]);
  }
  return result;
}

function writeStats(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    const name = arr[i][0];
    const score = arr[i][1];
    result += `${name} ${score}${EOL}`;
  }
  fs.writeFileSync('./data/stats.txt', result);
}

/* it('writeStats сохраняет статистику в файл `data/stats.txt`', () => {
    const stats = getStats();
    writeStats(stats);
    const data = fs.readFileSync('data/stats.txt', 'utf8');
    expect(data).toBe(`Revan 99.9${EOL}Bastila Shan 92${EOL}Jolee Bindo 87${EOL}Juhani 82${EOL}`);
  }); */

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
