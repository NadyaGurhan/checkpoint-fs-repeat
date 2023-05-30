const fs = require('fs')
module.exports = {
  getPadawanNames,
 getLightsaberScores,
  getStats,
/*   writeStats,  */
};

function getPadawanNames () {
  const newArrNames = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n'); // - преобразовали в массив строк
  return newArrNames;
};


function getLightsaberScores () {
  const newArrScores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n'); // - преобразовали в массив строк
  const newArrScoresNumber = newArrScores.map(elem => Number(elem));  //преобразовали в массив чисел
  return newArrScoresNumber;  
};

function getStats () {

  const arrNames = getPadawanNames ();
  const arrScores = getLightsaberScores ();
  console.log(arrScores);
  const arrNamesScores = arrNames.map((elem,index)=> (`${elem}, ${Number(arrScores[index])}`).split(','));
 
  console.log(arrNamesScores);
 
}
getStats ();