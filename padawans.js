 const fs = require('fs');
 let stringScores = fs.readFileSync('./data/scores.txt', 'utf-8');
 let stringNamesofPadawans = fs.readFileSync('./data/padawans.txt', 'utf-8');

 function getPadawanNames(){
  
  let arrayNamesofpadawans = stringNamesofPadawans.split('\n');
  let array = [];
  
  for(let i = 0; i < arrayNamesofpadawans.length-1; i+=1){
    array.push(arrayNamesofpadawans[i]);
  }
  return array;
 }

 function getLightsaberScores(){
  
  let arrayScores = stringScores.split('\n');
  let array = [];
 
  for(let i = 0; i < arrayScores.length; i+=1){
    array.push( +arrayScores[i]);
  }
  return array;
 }
 function getStats(){
  let arrayNamesofpadawans = stringNamesofPadawans.split('\n');
  let arrayScores = stringScores.split('\n');
  let megaArray = [];
  let array = [];
  for(let i = 0; i < arrayNamesofpadawans.length-1; i+=1){
    megaArray.push(array.push(arrayNamesofpadawans[i], +arrayScores[i]));
  }
  
  return megaArray;
 }
//  

 function writeStats(){
   let result = getStats();
  fs.writeFileSync('data/stats.txt', 'getStats() тут текст, я забыла как результат сюда добавить');
 }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
