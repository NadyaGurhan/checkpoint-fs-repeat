function getPadawanNames() {
  const fs = require("fs");
  let text = fs.readFileSync("data/padawans.txt", "utf8");
  let temp = text.split('\n');
  let result = temp.splice(0, 4);
  return result;
}

function getLightsaberScores() {
  const fs = require("fs");
  let text = fs.readFileSync("data/scores.txt", "utf8");
  let temp = text.split('\n');
  for (let i = 0; i < temp.length; i++) {
    temp[i] = +temp[i];
  }

  let result = temp.splice(0, 4);
  return result;
}

// function getStats() {
//   const fs = require("fs");
//   let text = fs.readFileSync("data/padawans.txt", "utf8");
//   let temp = text.split('\n');
//   let result = temp.splice(0, 4);

//   let text2 = fs.readFileSync("data/scores.txt", "utf8");
//   let temp2 = text2.split('\n');
//   for (let i = 0; i < temp2.length; i++) {
//     temp2[i] = +temp2[i];
//   }

//   let arrNew = [];
// }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats, 
}
