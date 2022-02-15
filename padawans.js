const fs = require('fs');
const readNames = fs.readFileSync("./data/padawans.txt", "utf-8");

function getPadawanNames()  {
  let arr = [];


// readNames.split('\n')
 
 
  for(let i = 0; i < readNames; i++ ) {

    // if( i === '') {
    //   continue
    // }
    arr.push(readNames);
  }
  return arr;
}

console.log(getPadawanNames())



module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
