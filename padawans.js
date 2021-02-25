const fs = require("fs");
const fileName = "./data/padawans.txt";
const ftleScore = "/data/scores.txt";
const fileToSave = "./data/stats.txt";

class getPadawanNames {
  names = () => {
    return fs.readFileSync("data/padawans.txt", "utf8").split("\n");
  };
}
class getLightsaberScores {}

class getStats {}

class writeStats {}

const padaw = new getPadawanNames();\
const 
console.log();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
