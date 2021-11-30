const fs = require('fs');

const getPadawanNames = () => {
  let nameArr = [];
  let text =  fs.readFileSync('./data/padawans.txt', 'utf-8');

  return nameArr.push(text);

}
getPadawanNames();
// module.exports = {
//   getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
// };
