const fs = require('fs');

function getPadawanNames() {
  const processData = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf8');
  const dataArr = processData.split('\n');
  return dataArr;
}

function getLightsaberScores() {
  const processData = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf8');
  const dataArr = processData.split('\n');
  for (let i = 0; i < dataArr.length; i++) {
    dataArr[i] = Number(dataArr[i]);
  }
  return (dataArr);
}

function getStats() {
  const processData1 = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf8');
  const processData2 = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf8');
  const dataArr1 = processData1.split('\n');
  const dataArr2 = processData2.split('\n');
  let finalArr = [];
  for (let i = 0; i < dataArr1.length; i++) {
    finalArr[i] = dataArr1[i] + ' ' + dataArr2[i];
    console.log(finalArr);
  }
  return finalArr;
}

getStats();

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
