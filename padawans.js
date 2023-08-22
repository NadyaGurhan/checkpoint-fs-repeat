const fs = require('fs')

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(any){
  let array = fs.readFileSync('./data/padawans.txt').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}
}
/* Как я понял, проблема с подключением файла и с синтаксисом, хотя задание вроде простое по идее(((*/
