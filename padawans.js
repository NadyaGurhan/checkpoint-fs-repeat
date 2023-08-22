const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

// Вижу список функций, которые должны отрабатывать, но их нужно написать. Проблема возникла на этапе подключения файла txt, из которого нужно вытащить данные и загнать в массив, чтобы пройти первый тест. 

// Ощущаю проблему с отсутствием знаний о работе с пакетом FS. 

function getPadawanNames () {
let name = [];
let giveName = fs.readFileSync("data/padawans.txt", "utf8").tostring().split(",");
console.log(giveName)
for (let i = 0; i < 4; i++) {
name.push(giveName)
}
return name;
}
