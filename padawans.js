const fs = require('fs')


function getPadawanNames(){
  const file = fs.readFileSync('./data/padawans.txt', 'utf-8');
  let name = file.split('\n');
  for(let i = 0; i < name.length; i++) {
    
    name[i] = name[i].trim()
  }
  return name.splice(0,4);
}

//console.log(getPadawanNames());

function getLightsaberScores () {
  const file = fs.readFileSync('./data/scores.txt', 'utf-8');
  let arr = file.split('\n').map(Number);
  return arr;
}
//console.log(getLightsaberScores());


function getStats (){
  const filescores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const filenames = fs.readFileSync('./data/padawans.txt', 'utf-8');
  let splitscores = filescores.split('\n');
  let splitnames = filenames.split('\n') 
  
  for (let i = 0; i < filenames.length; i++){
    splitnames[i] = splitnames[i].trim()
    splitscores 
  }

  let people =[];



}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  //writeStats,
};
