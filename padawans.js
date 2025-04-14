const fs = require('fs')
const { EOL } = require('os');



// Пример чтения файла
// console.log(fs.readFileSync('./test.txt', 'utf-8'));



function getPadawanNames(path, arr) {
  fs.writeFileSync("data/padawans.txt", arr.join());
}


function getLightsaberScores(path, arr) {
  fs.writeFileSync("data/padawans.txt", arr.join(EOL));
}

function getStats(path, arr) {
  fs.writeFileSync("data/padawans.txt", arr.join(EOL));
}

function writeStats(path, arr) {
  fs.writeFileSync("data/padawans.txt", arr.join(EOL));
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};