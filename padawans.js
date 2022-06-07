
const fs = require('fs');

function getPadawanNames () {
 const getText = fs.readFileSync('./data/padawans.txt', 'utf8') ;
 console.log(getText);
 return getText.trim().split('\n')
  }


  function getLightsaberScores () {
    const getScoreText = fs.readFileSync('./data/padawans.txt', 'utf8') ;
    console.log(getText);
    return getText.trim().split('\n')
     }
   




module.exports = {
  getPadawanNames,
 getLightsaberScores,
  //getStats,
  //writeStats,
};


