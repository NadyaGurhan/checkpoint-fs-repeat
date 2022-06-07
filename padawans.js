const fs = require('fs');
// const str = fs.readFileSync('./data/padawans.txt', 'utf8');
// console.log("🚀 ~ file: padawans.js ~ line 3 ~ str", str)


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  let arr = [];
  const str = fs.readFileSync('./data/padawans.txt', 'utf8');
  for (let i = 0; i < str.length; i++ ) {
    arr.push(str[i]);
  }
  return arr
}
console.log("🚀 ~ file: padawans.js ~ line 20 ~ str", str)
console.log(getPadawanNames(str))