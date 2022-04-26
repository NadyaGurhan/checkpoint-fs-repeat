const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames(){
  let arr = padawans.split('\r\n');
  arr.pop();
  return arr;
}

function getLightsaberScores(){
  let arr = scores.split('\r\n');
  arr = arr.map(item=>+item);
  return arr;
}

function getStats(){
  let arr = padawans.split('\r\n');
  arr.pop();
  let array = scores.split('\r\n');
  array = array.map(item=>+item);
  let result = [];
  for (let i=0; i<arr.length; i++){
    let buf = [];
    buf.push(arr[i],array[i]);
    result[i] = buf;
  }
  return result;
}

function writeStats(){
  let arr = padawans.split('\r\n');
  arr.pop();
  let array = scores.split('\r\n');
  array = array.map(item=>+item);
  let result = [];
  for (let i=0; i<arr.length; i++){
    let buf = [];
    buf.push(arr[i],array[i]);
    result[i] = buf;
  }
  for (let i=0; i<result.length; i++) {
    fs.appendFileSync(`./data/stats.txt`, `${result[i]}\n`);
  }
}
writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
