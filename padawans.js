const fs = require("fs");

fs.open("./data/padawans.txt", "r", (err, fd) => {
  // fd - это дескриптор файла
});

function fileHandler() {
  fs.readFile("./data/padawans.txt", "utf8", (err, data) => {
    if (err) throw err;

    console.log("padawans.txt");
  });
}

// нужно получить текстовый файл из папки data и вернуть массив строк. .split
function getPadawanNames(arr) {
  const list = fs.split(); // fs.readFile(list, ``);
  // for (let i = 0; i < arr.length; i++) {
    return list;
  }
}

// нужно получить текстовый файл из папки data, файл scores.txt, и вернуть массив чисел
function getLightsaberScores() {}

// получить данные из двух файлов и объединить в одни и вернуть массив массивов.
function getStats() {}

//записать полученную таблицу в виде строки в файл stats.txt`
function writeStats(arr) {
  const path = `./data/`;
  for (let i = 0; i < arr.length; i++) {
    fs.writeFileSync(path, `${arr[i]}\n`);
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
