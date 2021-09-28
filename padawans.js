const fs = require('fs'); // вызваем

const str = fs.readFileSync('./data/padawans.txt', 'utf8'); // присваеваем

function getPadawanNames(str2) {
	result = 
  arr = str2.split('\n');
  return arr.join();
}
console.log(getPadawanNames(str));

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
