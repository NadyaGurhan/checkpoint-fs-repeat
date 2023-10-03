const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


function getPadawanNames () {
  
  let names = fs.readFileSync("./data/padawans.txt", "utf8");
  console.log (names);
  
  let arr = names.join("\n");
  


}

  


function getLightsaberScores() {

}

function getStats () {

}
function writeStats () {
  
}