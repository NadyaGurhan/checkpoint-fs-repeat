// const Person = require('./person');
const fs = require('fs')

function getPadawanNames(filename = './data/padawans.txt') {
  const fs = require('fs');
  const re = /\n/;
  let str = fs.readFileSync(filename, 'utf-8');
  let arr = str.split(re);
  //console.log(arr)
  arr.pop();
  // console.log(arr)
  return arr
  // arr.shift();
  // return arr.map((each) => {
  //   const human = each.split(',');
  //   return new Person(...human);
  // })
}

function getLightsaberScores(filename = './data/scores.txt') {
  // Returns an array of Person objects
  // based on the data in the csv file.
  const fs = require('fs');
  const re = /\n/;
  let str = fs.readFileSync(filename, 'utf-8');
  let arr = str.split(re);
  let arrNumber = arr.map(e => Number(e));
  // console.log(arrNumber)
  // arr.pop();
  // console.log(arr)
  return arrNumber

}

function getStats() {
  // const names = getPadawanNames(),
  //   scores = getLightsaberScores(),
  //   stats = [];
  // names.forEach((e) => {
  //   stats.push(e);
  // });
  // scores.forEach((e, i) => {
  //   stats[i].push(e);
  // });
  // return stats;
}

class writeStats {

}


const names = getStats();
console.log(names);
// expect(names).toEqual(['Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani']);



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
