const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

// describe('Статистика о падаванах', () => {
//   it('getPadawanNames возвращает список падаванов из файла `data/padawans.txt`', () => {
//     const names = getPadawanNames();
//     expect(names).toEqual(['Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani']);
//   });

const readFileLines = padawans =>
  fs
    .readFileSync(padawans.txt)
    .toString('UTF8')
    .split('\n');
let arr = readFileLines('padawans.txt');
console.log(arr);