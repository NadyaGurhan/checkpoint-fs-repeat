const fs = require('fs');

const path = './data';

function getPadawanNames() {
  let data = fs.readFileSync(path + '/padawans.txt', 'utf-8');
  let persona = data
    .split('\n')
    .map((el) => el.split(','))
    .map((el) => el.join(', '));
  persona.splice(persona.length - 1, 1);
  // console.log(persona);
  return persona;
}
function getLightsaberScores() {
  let data = fs.readFileSync(path + '/scores.txt', 'utf-8');

  let score = data
    .split('\n')
    .map((el) => el.split(','))
    .map((el) => el.join(', '))
    .map((el) => Number(el));
  // console.log(score);
  return score;
}
function getStats() {
  let names = getPadawanNames();
  let score = getLightsaberScores();
  let table = [];
  let elTable = [];
  for (let index = 0; index < names.length; index++) {
    elTable.push(names[index], score[index]);
    elTable.map()
    table.push(elTable[index], elTable[index
       + 1]);
  }
  // eltable.reduce((acc, el) => {
  //   for (let index = 0; index < names.length; index++) {
  //     acc.push(el[i] + el[i + 1]);
  //   }
  // }, );
  console.log(table);
}
getStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
