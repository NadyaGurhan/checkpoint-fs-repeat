function getPadawanNames() {
  const fs = require("fs"); //  инициализиурем работу с файловой системой
  let fd = fs.openSync("data/padawans.txt"); // открыл файл
  let dataPadawans = fs.readFileSync(fd, "utf8").trim().split("\n"); // прочитал данные из файла, залил их в дата trim образает последнюю строку и сплит разбивает на массив
  return dataPadawans;
}

function getLightsaberScores() {
  const fs = require("fs"); //  инициализиурем работу с файловой системой
  let fd = fs.openSync("data/scores.txt"); // открыл файл
  let dataScores = fs.readFileSync(fd, "utf8").split("\n"); // прочитал данные из файла, залил их в дата
  return dataScores;
}

function getStats() {
  let name = getPadawanNames(); // передал данные из функций
  let score = getLightsaberScores();
  let result = {};
  name.forEach((key, i) => (result[key] = score[i])); // перезаписал данные из двух массивов в объект
  return result;
}

function writeStats(result) {
  const fs = require("fs");
  let dataToSave = JSON.stringify(newPeopleArray + "\n"); //  привел полученный объект к строке
  fs.appendFileSync(filename, dataToSave); //   записал данные в файл  'stats.txt'
}

// const data = parser.parse('people.csv');          // создал файл дата для записи в него полученных результатов
// parser.write(`data/stats.txt`, data);               // записываю данные в файл, называю его 'stats.txt'

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
