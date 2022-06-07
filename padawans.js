let fs = require('fs'); //выполняем подключение модуля fs от node
let getPadawanNames = () => {

  let pathFile = './data/padawans.txt';  //создаем 
  //разбить объект на массив строк
  //и возвратить новый массив содержащий копию части исходного
  let data = fs.readFileSync(pathFile, 'utf8').split('\r\n')
  //console.log(data.slice(0,-1))
  return data.slice(0,-1)
}
let getLightsaberScores = () => {

  let pathFile = './data/scores.txt';
  let data_1 = fs.readFileSync(pathFile, 'utf8').split('\n').map((element) => {
    return +element
  })
  return data_1
}
//getLightsaberScores()

//Третья функция решается с помощью первых двух.
//Нам нужно вернуть массив, в который запушить массив с результатами 
//вызова первых двух функций. 
let getStats = () => {
  let padavans = getPadawanNames()
  let scores = getLightsaberScores()
  let statsTab = []
  for (let index = 0; index < padavans.length; index += 1) {
    statsTab.push([padavans[index], scores[index]])
  }
  return statsTab
}
let writeStats = (statsControl) => {
  let pathFile = './data/stats.txt';  //создаем 
  let resultStats = statsControl.map((element) => `${element[0]} ${element[1]}`).join('\n');
  fs.writeFileSync(pathFile, resultStats);
}

module.exports = {
  getPadawanNames,
   getLightsaberScores,
  getStats,
   writeStats,
};
