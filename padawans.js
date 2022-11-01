const fs = require('fs')



function getPadawanNames(){
  let readfile = fs.readFileSync('./data/padawans.txt','utf-8').split('\n');
  let result = readfile.pop()
  return readfile
}

function getLightsaberScores(){
 let readfile = fs.readFileSync('./data/scores.txt','utf-8').split('\n'); 
 let resrr = readfile.map((el) => { return +el })
 return resrr 
}

function getStats(){
  let padNames = fs.readFileSync('./data/padawans.txt','utf-8').split('\n');
  let padScores = fs.readFileSync('./data/scores.txt','utf-8').split('\n')
  // let sum = [...padNames,...padScores]
  // console.log(sum);
  // let result = padNames.map( (el, padScores) => { return el.push(padScores[el])})
  // console.log(result);
  

}

function writeStats(){
  let writefile = fs.writeFileSync('stats.txt',)
}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
