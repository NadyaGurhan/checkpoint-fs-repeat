
const fs = require("fs");



function getPadawanNames(){
  const data = fs.readFileSync("data/padawans.txt", "utf8").split('\n')
  data.pop()
  return data
}
function getLightsaberScores(){
  const data1 = fs.readFileSync("data/scores.txt", "utf8").split('\n').map(element => Number(element))
 
  return data1

}





class getStats{}
class writeStats{}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
getPadawanNames()
