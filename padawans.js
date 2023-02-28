const fs = require('fs');

const padawanNames = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
const padawanScores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');

function getPadawanNames() {
  const resArr = padawanNames.split('\n').slice(0, 4);
  return resArr;
}

function getLightsaberScores() {
  const scoresArr = padawanScores.split('\n');
  const resScoresArr = scoresArr.map(elem => Number(elem));
  return resScoresArr;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
// Я не понимаю, почему не проходят успешно тесты по первым двум функциям. 
// Если вывести их результат в консоль, он соответствует тому, что указано в резудьтатах тестов.