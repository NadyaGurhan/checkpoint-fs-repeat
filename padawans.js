const fs = require("fs");


function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', "utf8")
  let crew = data.split('\n')
  let popped = crew.pop();
  return crew 
}

//console.log(getPadawanNames())


function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', "utf8")
  let crew = data.split('\n')
  let result = crew.map((num) => +num);
  return result
}

//console.log(getLightsaberScores())

function getStats() {
  const data = fs.readFileSync('./data/padawans.txt', "utf8")
  let crew = data.split('\n')
  let popped = crew.pop();

  const data1 = fs.readFileSync('./data/scores.txt', "utf8")
  let crew1 = data1.split('\n')
  let result = crew1.map((num) => +num);

  let newArr = []
  for (let i = 0; i < crew.length; i++) {
    newArr.push(crew[i], result[i] )
  }
  
return newArr
}

console.log(getStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
