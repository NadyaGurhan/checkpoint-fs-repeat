const fs = require("fs");
const path = require("path");

// const padawans = fs.readFileSync(path.join(__dirname, "../checkpoint-fs/data/padawans.txt"), 'utf8').split('\n').filter(function (el) {
//   return el != "";
// });

const getPadawanNames = () => {
  const padawans = fs
    .readFileSync(
      path.join(__dirname, "../checkpoint-fs/data/padawans.txt"),
      "utf8"
    )
    .split("\n")
    .filter(function (el) {
      return el != "";
    });
  return padawans;
};

const getLightsaberScores = () => {
  const scores = fs
    .readFileSync(
      path.join(__dirname, "../checkpoint-fs/data/scores.txt"),
      "utf8"
    )
    .split("\n");

  const scoresInt = [];
  scoresInt.push(parseFloat(scores[0]));

  for (let i = 1; i < scores.length; i++) {
    scoresInt.push(parseInt(scores[i]));
  }

  return scoresInt;
};

const getStats = () => {
  const padawans = getPadawanNames()
  const scores = getLightsaberScores();

  const padawansArr = [];

  padawansArr.push(padawans[0].split(' '))
  padawansArr.push(padawans[1].split(', '))
  padawansArr.push(padawans[2].split(', '))
  padawansArr.push(padawans[3].split(' '))

  

  padawansArr[0].push(scores[0])
  padawansArr[1].push(scores[1])
  padawansArr[2].push(scores[2])
  padawansArr[3].push(scores[3])

  return padawansArr
}

const result = getStats()

const writeStats = (result) => {
    fs.writeFileSync(
      path.join(__dirname, `../checkpoint-fs/data/stats.txt`),
      result.join(",\n"),
      "utf8"
    );
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
