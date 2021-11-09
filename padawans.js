const fs = require('fs');
let ul = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n')
console.log(ul)

const result = [];

function getPadawanNames() {
  for (let i = 0; i < ul.length; i++) {
     result.push(ul[i])
}
  return result
}
getPadawanNames()
function getLightsaberScores() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  //getStats,
  //writeStats,
};
