const fs = require('fs')
function getPadawanNames() {
return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n')
 

}
function getLightsaberScores(){
let scor = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n')
return scor.map(a => +a)
}
console.log(getLightsaberScores());

function getStats (){

let names = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n') 
let scores = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n')
let revan = [names[0], scores[0]]
let bastila =[names[1], scores[1]]
let jolee = [names[2], scores[2]]
let juhani = [names[3], scores[3]]
 res = [...[revan], ...[bastila],...[jolee],...[juhani]]
return res.map(a => a.map(el => el == +el ? +el : el))
}

console.log(getStats());

function writeStats() {
  
  let names = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n') 
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n')
  let revan = [names[0], scores[0]]
  let bastila =[names[1], scores[1]]
  let jolee = [names[2], scores[2]]
  let juhani = [names[3], scores[3]]
  let res = [...[revan], ...[bastila],...[jolee],...[juhani]].join('\n')

  return fs.writeFileSync('data/stats.txt', `${res}`)

}





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
