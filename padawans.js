const fs = require('fs');

// fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf8');
// .readFileSync - читает файл
// __dirname - указывает путь к файлу
// /data/padawans.txt - папка и имя файла, который нужно прочитать
// utf8 - чтобы все корректно отображалось

function getPadawanNames() {
  const padawanInfo = fs.readFileSync('./data/padawans.txt', 'utf8');
  let splitRes = padawanInfo.split('\n')
  splitRes.pop();
  return splitRes;
}

function getLightsaberScores() {
  const scoresInfo = fs.readFileSync('./data/scores.txt', 'utf8');
  let splitRes = scoresInfo.split('\n')
  let numRes = splitRes.map( (el) => Number(el) );
  return numRes;
}

function getStats() {
  const padawanInfo = fs.readFileSync('./data/padawans.txt', 'utf8');
  const scoresInfo = fs.readFileSync('./data/scores.txt', 'utf8');
  
  let names = getPadawanNames() 
  let scores = getLightsaberScores()

let mapRes = names.map( (el, index) => [el, scores[index]] )
  return mapRes;
}

function writeStats() {
  const padawanInfo = fs.readFileSync('./data/padawans.txt', 'utf8'); // подключаем файл padawans.txt
  const scoresInfo = fs.readFileSync('./data/scores.txt', 'utf8'); //подключаем файл scores.txt
  
  let names = getPadawanNames() 
  let scores = getLightsaberScores()

  let mapRes = names.map( (el, index) => [el, scores[index]] ) // мэппим names, в коллбэк функцию загоняем элемент и индекс. В качестве индекса - элемент scores.
  let arrToStr = mapRes.join('\n') //переводим массив в строку и используем \n, чтобы переносились строки
  let newStr = arrToStr.replaceAll(',',' ') // заменяем запятые на пробелы

  let writeFile = fs.writeFileSync('./data/stats.txt', newStr, 'utf8') // создаем файл stats.txt и записываем в него строки
  return writeFile

}

writeStats()


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

// function getPadawanNames() {
//   const padawanInfo = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf8');
//   const splitRes = padawanInfo.split('\n');
//   splitRes.pop();
//   return splitRes;
// }

// function getLightsaberScores() {
//   const scoresInfo = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf8');
//   const splitRes = scoresInfo.split('\n');
//   const final = parseInt(splitRes);
//   return final;
// }
