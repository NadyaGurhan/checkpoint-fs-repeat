const fs = require('fs');

function getPadawanNames(){
  let arr = [];
  arr.push(fs.readFileSync('./data/padawans.txt', 'utf-8'));
  let names = arr.map(elem => elem.split('\n'))
  return names[0]
}

function getLightsaberScores(){
  let arr = [];
  arr.push(fs.readFileSync('./data/scores.txt', 'utf-8'));
  let names = arr.map(elem => elem.split('\n'))
  let array = names[0].map(elem => Number(elem))
  return array
}

function getStats(){
  let arr = [];
  arr.push(fs.readFileSync('./data/padawans.txt', 'utf-8'));
  let names = arr.map(elem => elem.split('\n'))
  let name = names[0]


  let array = [];
  array.push(fs.readFileSync('./data/scores.txt', 'utf-8'));
  let row = array.map(elem => elem.split('\n'))
  let num = row[0].map(elem => Number(elem))


  let empty = [];
  for (let i = 0; i < name.length; i++) {
    empty.push([name[i], num[i]]);
  }

  return empty
}

function writeStats(){

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


