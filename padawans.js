const fs = require('fs')

let pNames = [];

function getPadawanNames() { 
  // pNames.push(fs.readFileSync('./data/padawans.txt', 'utf-8'));
  // pNames.join(", ")
  // result = [...pNames]
  // return result                                           //не работает

  const result = [fs.readFileSync('./data/padawans.txt', 'utf-8')]; //не работает
  return result
}

function getLightsaberScores() { 
  let res = fs.readFileSync('./data/scores.txt', 'utf-8');
  let res1 = res.slice()
  return res1
}

function getStats() { }

function writeStats() { }
  
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
console.log(pNames);