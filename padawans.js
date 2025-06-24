const fs = require('fs')


  const one =fs.readFileSync(`./data/padawans.txt`, 'utf-8');
    const arr =[];
  function getPadawanNames(){
    for(let i =0; i<5;i++){
      arr.push(arr[i])
    }
    return arr
  }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};