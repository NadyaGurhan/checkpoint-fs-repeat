const fs = require('fs');

const padawan = fs.readFileSync('./data/padawans.txt', 'utf-8')

function getPadawanNames(){
   return padawan.split('\r\n').slice(0, 4)
}
getPadawanNames()



module.exports = {
  getPadawanNames,
//  getLightsaberScores,
//  getStats,
//  writeStats,
};
