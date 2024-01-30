const fs = require('fs')

//возвращает список падаванов из файла `data/padawans.txt
function getPadawanNames () { 
  let arr = fs.readFileSync(`./data/padawans.txt`,'utf-8').split('\r\n');
  arr.splice(-1,1)
return arr;
}


function getLightsaberScores () { 
  let arr = fs.readFileSync(`./data/scores.txt`,'utf-8').split('\r\n');
  arr = arr.map((item) => Number(item));
return arr;
}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
