const fs = require('fs')

const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
const arrayPadawans = padawans.split('\n');
arrayPadawans.pop();

const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');
const arrayScores = scores.split('\n');
let statsArray=[];




function getPadawanNames()
{
  return arrayPadawans;
}

function getLightsaberScores()
{
  for (i=0; i<arrayScores.length; i++)
  {arrayScores[i]=Number(arrayScores[i])}
  return arrayScores;
}

function getStats()
{
  for (i=0; i<arrayPadawans.length; i++)
  {
    let newArray=[];
    newArray[0]=arrayPadawans[i];
    newArray[1]=Number(arrayScores[i]);
    statsArray.push(newArray);
  }
  return statsArray;

}
function writeStats()
{
  let newArray=[];
  for (i=0; i<arrayPadawans.length; i++)
  {
    newArray[i]=arrayPadawans[i]+" "+ arrayScores[i];
  };

fs.appendFileSync('./data/stats.txt', `newArray.join(" ")`, 'utf8');

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
