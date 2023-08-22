const fs = require('fs');

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames() {
  const newArr = fs.readFileSync('./data/padawans.txt', 'utf8').toString().split('\n');
  return newArr
}
const padawanNames = getPadawanNames(); 
console.log(padawanNames); 

// при вызове node padawans.js выводит [ 'Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani', '' ] , не пониммаю как вывести это все в тест 
// привек к строке - сплитанул - но все ранво получил массив
// function getLightsaberScores() {

// }

// function getStats() {

// }

// function writeStats() {

// }
