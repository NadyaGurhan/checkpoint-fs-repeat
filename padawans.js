const fs = require('fs')

const getPadawanNames = () => {
  const res = fs.readFileSync("./data/padawans.txt", 'utf-8').split("\n")
  return res
  
  
};


const getLightsaberScores = () => {
 const res1 = fs.readFileSync("./data/scores.txt", "utf-8").split('\n')
 const test = []
 for(let i = 0;i<res1.length; i++){
  test.push(parseInt(res1[i]))
 }

 return test
}
const getStats = () => {

}
const writeStats = () => {

}







module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

