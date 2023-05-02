

// 1. преобразить содержимое текстовых файлов в массив строк 
// 2. использовать этот массив в функциях ниже, первый массив для первой функции, второй массив для второй, соединить два массива для третьей функции чтобы возратить статистику подаванам, для четвертой функции сохранить ее для них.


// создаем переменную для чтения файла
let fs = require('fs')
let fileContent1 = fs.readFileSync('data/padawans.txt', 'utf8');
console.log(fileContent1)
// преобразуем первый текстовый файл в список массивов и передаем каждый на одну строку
let array = fileContent1.split().join(',')
// console.log(array)
// обьявляем новый пустой массив и пушаем туда элементы основного массива
let newArr = []
for(y of array) {
  newArr.push(y.toString().split())
}


function getPadawanNames() {
  return newArr;
}


let fs2 = require('fs')
let fileContent80 = fs2.readFileSync('data/scores.txt', 'utf8');
console.log(fileContent80)
let array100 = fileContent80.split(',')
let newArr50 = []
for(el of array100) {
  newArr50.push(el.split())
}

function getLightsaberScores() {
  return newArr50;
}
function getStats() {
return newArr.concat(newArr50)
}
function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
