const fs = require("fs");
const padawans = fs.readFileSync('data/padawans.txt', 'utf8').split('\n');
const scores = fs.readFileSync('data/scores.txt', 'utf8').split('\n');
console.log(scores);



// getPadawanNames возвращает список падаванов из файла `data/padawans.txt
// expect(names).toEqual(['Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani']);
function getPadawanNames () {
   let newPadawansArr = [];
   for (let i = 0; i < padawans.length; i++) {
    if (padawans[i] !== '') 
     newPadawansArr.push(padawans[i]);
   }
   return newPadawansArr;
}

// getPadawanScores возвращает оценки владения световым мечом из файла `data/scores.txt
// [99.9, 92, 87, 82]
function getLightsaberScores () {
  let newArr = [];
  for (let i = 0; i < scores.length; i++) {
    newArr.push(scores[i]*1);
    
  } 
  return newArr;
}

function getStats () {

}

function writeStats () {

}


 module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
 
 
