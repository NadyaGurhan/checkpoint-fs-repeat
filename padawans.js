const fs = require('fs');
const getPadawanNames = () =>{
  let names = fs.readFileSync(`./data/padawans.txt`, `utf-8`);
   names = names.split('\n');
   names.pop();
  return names;
  
}
console.log(getPadawanNames());

const getLightsaberScores = () =>{
  let scores = fs.readFileSync(`./data/scores.txt`, `utf-8`)
   scores =  scores.split('\n');
  return scores.map(x => Number(x))
}

console.log(getLightsaberScores())
const getStats = () =>{
}
const writeStats = () =>{

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};