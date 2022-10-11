const fs = require('fs');

// возвращает список падаванов из файла `data/padawans.txt`
const getPadawanNames = () => {
  const names = fs.readFileSync('data/padawans.txt', 'utf8');
  return names.split('\n');
};

const getPadawanScores = () => {
  const scores = fs.readFileSync('data/scores.txt', 'utf8');
  return scores.split('\n'); // выводит массив из строк, а нужно преобразовать в массив из чисел
};
console.log(getPadawanScores())

module.exports = {
  getPadawanNames,
  getPadawanScores,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
