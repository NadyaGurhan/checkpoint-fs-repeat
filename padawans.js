const fs = require('fs')


let pars1 = []
function getPadawanNames () {
let pars = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n').filter(el => el !== '')
pars1.push(pars)
return pars
}
let pars2  = []
function getLightsaberScores () {
  let pars = fs.readFileSync('data/scores.txt', 'utf-8').split('\n').map(el => el = Number(el))
  pars2.push(pars)
  return pars
  
}
getPadawanNames()
getLightsaberScores()

function getStats () {
  let res = []
res = pars1.concat(pars2)

return res

}

console.log(getStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
