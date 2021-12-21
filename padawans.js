const fs = require('fs');
const path = require('path');


const getPadawanNames = () => {
     const filePath = fs.readFileSync('data/padawans.txt', "utf8");
     listOfPadawans = filePath.split('\n');
     const result = [];
     for (let i = 0; i < listOfPadawans.length; i += 1) {
       if (listOfPadawans[i] !== '') {
         result.push(listOfPadawans[i])
       }
     }
     return result;
};
getPadawanNames();

const getLightsaberScores = () => {
  const fileContent = fs.readFileSync('data/scores.txt', "utf8");
  const listOfScores = fileContent.split('\n');
  const result = [];
 for (const element of listOfScores) {
   result.push(element);
 }

};
getLightsaberScores();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
