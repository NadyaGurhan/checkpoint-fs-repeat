
const fs = require('fs')

function getPadawanNames(){

  let files = fs.readFileSync('data/padawans.txt','utf-8').split('\n')
  files.pop()
 


return files

}


function getLightsaberScores(){
  let file = fs.readFileSync('data/scores.txt','utf-8').split('\n')
 file = file.map(el => +el)
return file
}




function getStats(){
  let files = fs.readFileSync('data/padawans.txt','utf-8').split('\n')
  files.pop()

  let file = fs.readFileSync('data/scores.txt','utf-8').split('\n')
  file = file.map(el => +el)

let arr = []
  for (let i = 0; i < files.length; i++) {
   arr.push(files[i]+ ',' + file[i])
    
  }


  return arr
}


 
console.log(getPadawanNames());
console.log(getLightsaberScores());
console.log(getStats());


module.exports = {
  getPadawanNames,
   getLightsaberScores,
  //  getStats,
  //  writeStats,
};
