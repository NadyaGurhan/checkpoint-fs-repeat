const fs = require('fs');

function getPadawanNames() {
  let result = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let newArr = result.split('\n');
  newArr.pop()
  return newArr;


}
// console.log(getPadawanNames());
getPadawanNames()

function getLightsaberScores() {
  let result = fs.readFileSync('./data/scores.txt', 'utf-8');
  let newArr = result.split('\n')
  let finalArr = [];
    for (let i = 0; i < newArr.length; i++) {
      finalArr.push(+newArr[i])
    }
  return finalArr;
}
getLightsaberScores()
// console.log(getLightsaberScores())

function getStats() {
  let key = getPadawanNames();
  let value = getLightsaberScores();
  const miniArr = [];
  
  for (let i = 0; i < key.length; i++) {
      miniArr.push(key[i], value[i]);
  }
  // result.push(key[0], value[0]);
  let index = -1;
  const result = miniArr.reduce((final, curr, i) => {
    if (i % 2 === 0) {
      final.push([curr])
      index++;
      // console.log(final);
    } else {
      final[index].push(curr);
      // console.log(final);
    } return final
  }, [])
  return result;
}
getStats() 
// console.log(getStats());

function writeStats() {
  const foo = getStats()
  const newArr = [];
  let result;
for (let i = 0; i < foo.length; i++) {
  newArr.push(foo[i].join(' '))
  
}
  result = newArr.join('\n');
  fs.writeFileSync('./data/stats.txt', result)
  return result;
  // return 
  // console.log(result);
}
writeStats()
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
}; 


// const people = [
//   { name:'Bob', age: 10},
//   { name:'Beb', age: 7},
//   { name:'Bib', age: 13},
// ]

// // написать функцию, которая отсортирует массив people в порядке убывания возрастов,
// // и не мутирует входящий массив

// function getPeopleAge(arr) {
//   const newArr = [...arr]
//   newArr.sort((a, b) => b.age - a.age);
//   return newArr;
  
// }
// console.log(getPeopleAge(people));
