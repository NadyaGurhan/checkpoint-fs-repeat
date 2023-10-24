const fs = require('fs')


function getPadawanNames () {
  let padawanList = [];
  let padawans = fs.readFileSyncFileSync( `./data/padawans.txt`)
  const ar = padawans.split('\n')
  for (let i = 0; i < ar.length; i++) {
    padawanList.push(ar[i])
  }
  return padawanList;
}

console.log((fs.readFileSyncFileSync( `data/padawans.txt` , 'utf8')()))





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
