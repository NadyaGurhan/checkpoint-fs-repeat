const fs = require('fs');

function getPadawanNames() {
  let parseData = fs.readFileSync('./data/padawans.txt', 'utf-8').split("\n");
  return parseData.slice(0,parseData.length -1);
}

function getLightsaberScores (){
  let parseData = fs.readFileSync('./data/scores.txt', 'utf-8').split("\n");
  let newArr = parseData.map(el => {
    return parseFloat(el);
  })
  return newArr;
 }

 function getStats() {
  let a = getPadawanNames();
  let b = getLightsaberScores();
  let arr = [];
  for(let i=0; i<a.length; i++) {
    arr.push([a[i],parseFloat(b[i])]);
  }
  return arr;
}

 function writeStats(stats) {
  let data = stats.map(element => {
   return element.join(',');
  });
  data = data.join('\n');
  data = data.replace(/,/gm, " ");
  //return data;
  data = fs.writeFileSync('./data/stats.txt', data);
  return data;
 }

 console.log(getPadawanNames());
 console.log(getLightsaberScores());
 console.log(getStats());
 let stats = getStats();
 console.log(writeStats(stats));

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
