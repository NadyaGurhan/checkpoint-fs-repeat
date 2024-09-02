const fs = require('fs');

const getPadawanNames = () => {
  const filePath = './data/padawans.txt';
  const dataP = fs.readFileSync(filePath, 'utf-8');
  const arr1 = dataP.split('\n');
  if (arr1.includes('')) {
    arr1.pop();
  }
  return arr1;
}

const getLightsaberScores = () => {
  const filePath2 = './data/scores.txt';
  const dataP2 = fs.readFileSync(filePath2, 'utf-8');
  const arr2 = dataP2.split('\n');
  const newArr2 = arr2.map((item) => Number(item));
  return newArr2;
}

// const names = getPadawanNames();
// const scores = getLightsaberScores();

const getStats = () => {
  const stats = [];

  const filePath = './data/padawans.txt';
  const dataP = fs.readFileSync(filePath, 'utf-8');
  const arr1 = dataP.split('\n');
  if (arr1.includes('')) {
    arr1.pop();
  }
  
  const filePath2 = './data/scores.txt';
  const dataP2 = fs.readFileSync(filePath2, 'utf-8');
  const arr2 = dataP2.split('\n');
  const newArr2 = arr2.map((item) => Number(item));
  
  for(let i = 0; i < arr1.length; i += 1) {
    stats.push([arr1[i], newArr2[i]]);
  }
  return stats;
}



const writeStats = () => {
  const newPath = 'data/stats.txt';
  const getData = getStats();
  const getStr = getData.map((item) => item.join(' '));
  const getStr2 = getStr.join('\n');
  fs.writeFileSync(newPath, getStr2);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};