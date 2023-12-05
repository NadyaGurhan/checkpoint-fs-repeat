const randomNames = require('random-profile-generator');
const random = require( '@stdlib/random' );

const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

//я вообще подумал что надо сгенерировать сначала имена
// function getPadawanNames(count) {
//   let resultArr = [];
//   for (let i = 0; i < count; i++) {
//   const names = randomNames.name();
//      resultArr.push(names)
//   }
//   return resultArr;
// }

// console.log(getPadawanNames(4));


function getPadawanNames (data) {
  const writeNames = fs.writeFileSync("./data.padawans.txt", "utf8");
}



function getLightsaberScores () {

}


function getStats() {

}

function writeStats () {

}
