const fs = require('fs');
const path = require('path');

const padavansX = fs.readFileSync(path.join(__dirname, '/home/ilya/checkpoint-fs/checkpoint-fs/data/padawans.txt'), 'utf8');
const scoresX = fs.readFileSync(path.join(__dirname, './data/scores.txt'), 'utf8');


function getPadawanNames(){
  let arr = [];
  let mas = padavansX.split('\r\n').join();
 for(let el of mas){
   arr.push(el);
 }
 return arr;
}

function getLightsaberScores(){
  let arr = [];
  let mas = scoresX.split('\n');
 for(let el of mas){
   arr.push(el);
 }
 return arr;
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
