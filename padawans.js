const { log } = require('console')
const fs = require('fs')

function getPadawanNames(){
const data = fs.readFileSync('data/padawans.txt', 'utf-8')

const res = data.trim().split('\n')

return res


}

function getLightsaberScores(){
  const scoresData = fs.readFileSync('data/scores.txt', 'utf-8')

 const arrOfSTRINGS = scoresData.split('\n')
const res = arrOfSTRINGS.map((el)=> +el)

 return res
}

function getStats(){
const listOfNames = getPadawanNames();
const listOfScores = getLightsaberScores()
const newArr = []
for(let i = 0; i < listOfNames.length; i++){
  
  newArr.push([listOfNames[i],listOfScores[i]])

}

return newArr

}

//console.log(listOfNames,listOfScores, "1312321123")



function writeStats(){
  const final = getStats()
  console.log(final, 'final ')
  const string = final.join('\n') 
  console.log(string, "string ")
// const regcoma = /,/gm
// const regspace = / /gm
const result = string.replaceAll(',', ' ')
return  fs.writeFileSync('./data/stats.txt', result )
  }
  //  console.log(final.join('\n') , 'asdfasddaf')

 




writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
