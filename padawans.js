const fs = require('fs')
const { join } = require('path')


function getPadawanNames(){
  
  let padawans = fs.readFileSync("data/padawans.txt", "utf8")
  let pad = padawans.split("\n").slice(0, -1) 

  return pad

}

function getLightsaberScores(){


  let padawans = fs.readFileSync("data/scores.txt", "utf8")
  let pad = padawans.split("\n")
  pad = pad.map(el =>  +el) 

  return pad

}

function getStats() {

  let pad = getPadawanNames()
  let stat = getLightsaberScores()

  let arr = []

  for(let i = 0; i < pad.length; i++){
   
    let arr2 = [pad[i], stat [i]]
    arr.push(arr2)
  
  }

  return arr

}

function writeStats(){

  let data = getStats()

  let str = ''

  for(let i = 0; i < data.length; i++){
    
    str = str + data[i].join(' ') + '\n'
  }

  str = str.slice(0, -1)

  console.log(str)

  
 

  
  
  fs.writeFileSync(`data/stats.txt`, `${str}`)
  

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
