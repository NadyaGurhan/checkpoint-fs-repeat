
module.exports = {
  getPadawanNames,
  getLightsaberScores
};

const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf-8'); //синхронно  читаем 
  return data.trim().split('\n'); /// пробелы  и текст на массивы  
}

function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', 'utf-8');
  return data.trim().split('\n').map(Number);/// пробелы  и текст н
}

// а массивы  и переобразуем каждую строку в число 

/////

// на 
// это 
// только 
// хватило 

// дальше
// пошла 
// беда 

// простите 


// окурпгшкужп






// Console,loh
// пкул
// function getLightsaberScores() {
//   const data = fs.readFileSync('./data/scores.txt', 'utf-8');
//   return data.trim().split('\n').map(Number);
// }



//   for (let i = 0; i < names.length; i++) {
//     stats.push([names[i], scores[i]]);


// function writeStats(stats) {
//   const lines = stats.map(([name, score]) => 
//   fs.writeFileSync('./data/stats.txt', lines.join(EOL), 'utf-8');
// }









