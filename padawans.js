const fs = require('fs');
let pada = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1)
let points = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');

function getPadawanNames() {
  return pada;
}

function getLightsaberScores() {
  let newArr = [];
  for (let i = 0; i < points.length; i++) {
    newArr.push(Number(points[i]))
  }
  let x = 1
  return newArr;
}


function getStats() {
  const sabers = getLightsaberScores();
  // console.log('===>', sabers)
  // console.log('===>', pada.join(', '))
  
  const strPada = pada
  let arr = []
  

  for (let i = 0; i < strPada.length; i++) {
    // console.log('===>', strPada[i])
    arr.push([strPada[i]]);
    // console.log(arr)
  }
  for (let i = 0; i < strPada.length; i++) { 
      for (let c = 0; c < sabers.length; c++)
      arr[i].push(sabers[i])
  }

  const lastArr = []
 
  for (let b = 0; b < arr.length; b++) {
    lastArr.push(arr[b].slice(0, 2))
  }

 
 return lastArr;
  

}

console.log(getStats())



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
