
const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const padawans = require('./data/padawans');
const padawansFile = fs.readdirSync(padawans);

for (let i = 0; i < padawansFile.length; i++);
console.log(fs.statSync(`${padawansFile[i]}`))

// describe('Статистика о падаванах', () => {
//   it('getPadawanNames возвращает список падаванов из файла `data/padawans.txt`', () => {
//     const names = getPadawanNames();
//     expect(names).toEqual(['Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani']);
//   });
 
  