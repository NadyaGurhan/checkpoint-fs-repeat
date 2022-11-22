const fs = require("fs");

const getPadawanNames = () => {
  const read = fs.readFileSync(`./data/padawans.txt`, "utf-8");

  return read.split("\n").splice(0, 4);
};

const getLightsaberScores = () => {
  const arr = fs.readFileSync(`./data/scores.txt`, "utf-8");
  return arr.split("\n").map((el) => +el);
};

// const getStats = () =>{
//   const arrName = fs.readFileSync(`./data/padawans.txt`, "utf-8")
//   arrName.split('\n')
//   const arrScore = fs.readFileSync(`./data/scores.txt`, "utf-8");
//   arrScore.split('\n')
//   let arrRes = []
//   for (let i = 0; i < 4; i++) {
//     arrRes.push(arrName)
    
//   }
//   return arrRes
// }



// const writeStats = () =>{




console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
//   writeStats,
};
