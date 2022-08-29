const fs = require('fs');

function getPadawanNames() { // функция должна вернуть массив строк
  const res = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return res.trim().split('\n'); /** trim - убирает пробельные символы(переносы) строки,
  а split возвращает новый массив */
}

function getLightsaberScores() { // функция должна вернуть массив чисел
  const score = fs.readFileSync('./data/scores.txt', 'utf-8')
    .split('\n'); // возвращаем новый массив из файла scores, с переносом строки
  return score.map((el) => +(el)); /** возвращаем мапом новый массив,
  где каждый элемент строки превращаем в число */
}

function getStats() { // совмещаем 2 массива из предыдущих 2ух файлов
  const name = getPadawanNames(); // #1 c падаванами
  const score = getLightsaberScores(); // #2 c оценками владения световыми мечами
  const result = []; // результатом вывода будет массив
  for (let i = 0; i < name.length; i++) { // проходимся по длине массива падаванов
    result.push([name[i], score[i]]); // и соединяем элементы двух функций в массив с массивами
  }
  return result;
}

function writeStats() { // совмещаем 2 массива из предыдущих 2ух файлов
  const names = getPadawanNames(); // #1 c падаванами
  const scores = getLightsaberScores(); // #2 c оценками владения световыми мечами
  let result = ''; // результатом вывода будет строка
  for (let i = 0; i < names.length; i++) { // проходимся по длине массива падаванов
    result += `${names[i]} ${scores[i]}\n`; // и соединяем элементы двух функций в шаблонную строку
  }
  const final = result.trim(); // методом trim - убираем пробельные символы(переносы) строки
  return fs.writeFileSync('./data/stats.txt', final); /** создаём новый файл
  при помощи записи fs и передаём туда нашу строку final */
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
