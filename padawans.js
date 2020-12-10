
const fs = require('fs');

function getPadawanNames() {

  let names = fs.readFileSync('./data/padawans.txt', 'utf-8');

  names = names.split(/\n/);
  names.pop()

  return names
  // console.log(names);

}

function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  scores = scores.split(/\n/);
  scores.pop()

  return scores.map(e => { return +e });
}

function getStats() {
  let arrNames = getPadawanNames();
  let arrScores = getLightsaberScores();
  let statsArr = [];
  for (let i = 0; i < arrNames.length; i++) {
    //  let [a,b];
    let res = [a, b] = [arrNames[i], arrScores[i]]
    statsArr.push(res)
  }
  return statsArr
}


function writeStats() {
  let str = getStats();
  str=str.join('\n')
  str=str.replace(/\,/g,' ')
  fs.writeFileSync('./data/stats.txt',`${str}`)
  return str

}
   


console.log(writeStats());


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
