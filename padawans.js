const fs = require('fs')

function getPadawanNames(){
  const text = fs.writeFileSync("__dirname + '/data/padawans.txt", "utf-8");
  return console.log(text);
  
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


