const fs = require('fs');

const padawans = fs.readFileSync('data/padawans.txt', 'utf8').split('\n');
const scores = fs.readFileSync('data/scores.txt', 'utf8').split('\n');

function getPadawanNames() { return padawans; }

function getLightsaberScores() { return scores; }

function getStats() {
  const newArr = [];
  for (let i = 0; i < padawans.length; i++) {
    const element = [padawans[i], scores[i]];
    newArr.push(element)
  }
}

// не могу вывести в консоль  элементы для проверки, пришет что неверная директория, не получается в нее зайти
// в третьем задании решил просто создать пустой массив и в него через цикл пушить другой массив с элементами i

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
