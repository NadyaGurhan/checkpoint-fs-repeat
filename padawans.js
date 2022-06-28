const fs = require('fs')

const  getPadawanNames  = () => {
  
  for (let i = 0; i < names; i++) {
   fs.readFileSync(`data/padavans.txt`, `utf-8`)
  }

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


