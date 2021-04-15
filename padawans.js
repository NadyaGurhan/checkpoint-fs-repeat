const fs = require('fs')

class getPadawanNames {
  parse(filename) {
    let readFile = fs.readFileSync(filename, 'utf-8').trim().split('\n');
    return readFile;
  }
}

let objPadamans = new getPadawanNames;
let padavans = objPadamans.parse('./data/padawans.txt');
console.log(padavans)

class getLightsaberScores {
  parse(filename) {
    let readFile = fs.readFileSync(filename, 'utf-8').trim().split('\n');
    return readFile;
  }
}

let objScores = new getPadawanNames;
let scores = objScores.parse('./data/scores.txt');
console.log(scores)

class getStats {
  parse(arrPadavans, arrScores) {
    return arrPadavans.map((el, i) =>{
      return [el, arrScores[i]]
    });
  }
}

let objStatus = new getStats;
let numberScores = objStatus.parse(padavans, scores);
console.log(numberScores)

class writeStats {
  parse(filename, array) {
    return fs.writeFileSync(filename, JSON.stringify(array));
  }
}

let objWriteStatus = new writeStats;
let writeStatus = objWriteStatus.parse('./data/stats.txt', numberScores);
console.log(writeStatus)

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
