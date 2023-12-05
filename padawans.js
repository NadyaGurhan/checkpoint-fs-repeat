const fs = require('fs')
const path = require('path')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};



function getPadawanNames (){
  const file = './data/padawans.txt'
const add = (fs.readFileSync(file, 'utf-8')).trim().split('\r\n')
return add
}



function getLightsaberScores (){
  const fileScores = './data/scores.txt'
  const addScore = (fs.readFileSync(fileScores, 'utf-8')).split('\r\n').map(Number)
  return addScore
}
getLightsaberScores()
function getStats (){
let name = getPadawanNames()
let score = getLightsaberScores()

const newArr = [];
for(let i = 0; i < name.length; i+=1){
  newArr.push([name[i], score[i]])
}
return newArr
}

function writeStats (){
 let str = getStats().join('\n')
 let resultStr = ''
for (let i = 0; i < str.length; i++){
  if(str[i] === ','){
    resultStr += ' '
  }else if (str[i] !== ',')
  resultStr +=str[i]
}
fs.writeFileSync('./data/stats.txt', resultStr)

}



// const data = fs.readFileSync('data/stats.txt', 'utf8');
// console.log (data)

// let table = getStats().join('\n')
// console.log (table)