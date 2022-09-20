const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', { encoding: 'utf-8' }).split('\n');
const scores = fs.readFileSync('./data/scores.txt', { encoding: 'utf-8' }).split('\n');
// console.log(scores);

// function getPadawanNames() {
//     let pad = padawans.slice(0,-1);
//     return pad
//   }
//   console.log(getPadawanNames());

//   function getLightsaberScores() {
//     let nums = scores.map(el => Number(el));
//     return nums
//   }
//   console.log(getLightsaberScores());

  // function getStats() {
  //   let names = padawans.slice(0,-1);
  //   let stats = scores;
  //   let arr1 = [];
  //   for (let i = 0; i < names.length; i++){
  //     arr1.push([names[i],+stats[i]])
  //   }
  //   return arr1
  // }
  // console.log(getStats());

  function writeStats() {
    let names = padawans.slice(0,-1);
    let stats = scores;
    let arr1 = [];
    for (let i = 0; i < names.length; i++){
      arr1.push([names[i],+stats[i]])
      fs.appendFileSync(`./data/stats.txt`);
    }
    return arr1
  }
  console.log(writeStats());

module.exports = {
  // getPadawanNames,
  // getLightsaberScores,
  // getStats,
  writeStats,
};
