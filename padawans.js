const fs = require('fs')
let data = fs.readFileSync("./data/padawans.txt", "utf8");
//console.log(data)

//class Padawan {
function getPadawanNames() {
    let dataArr = data.split('\n')
    let padArr = []
    
    for (let i = 0; i < dataArr.length; i++) {
      padArr.push(dataArr[i])
    }
    //console.log(padArr)

  let finalArr;
  finalArr = padArr.slice(0, -1)
  //console.log(finalArr)
  return finalArr
  }
  console.log(getPadawanNames())
  
  
  //getLightsaberScores()
  //getStats()
  //writeStats()
  
//}



module.exports = {
  getPadawanNames,
  //getLightsaberScores,
  //getStats,
  //writeStats,
};
