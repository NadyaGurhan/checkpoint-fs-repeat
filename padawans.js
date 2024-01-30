const fs = require('fs')



function getPadawanNames(){

  const allPadawans = fs.readFileSync("./data/padawans.txt", "utf8");
  newArr = allPadawans.split("\n");
  return newArr

}



function getLightsaberScores (){

  const scores = fs.readFileSync("./data/scores.txt", "utf8");
  newArr = scores.split("\n");

  return newArr
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
