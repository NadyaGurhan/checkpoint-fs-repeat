const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawansName = padawans.split('\r\n');
  const padawansList = [];
  for (let i = 0; i < padawansName.length - 1; i++) {
    padawansList.push(padawansName[i]);
  }
  return padawansList;
}

function getLightsaberScores() {
  const lightSaber = fs.readFileSync('./data/scores.txt', 'utf-8');
  const lightSaberSc = lightSaber.split('\r\n');
  const LSS = [];
  for (let i = 0; i < lightSaberSc.length; i++) {
    LSS[i] = Number(lightSaberSc[i]);
  }
  return LSS;
}

function getStats() {
  const jediName = getPadawanNames();
  const score = getLightsaberScores();
  const combinedArrays = [];
  for (let i = 0; i < jediName.length; i++) {
    const currentArray = [jediName[i], score[i]];
    combinedArrays.push(currentArray);
  }
  return combinedArrays;
}

const stats = getStats();

function writeStats(stats) {
  stats.forEach((array) => {
    let jediName = '';
    for (let i = 0; i < array.length; i++) {
      if (typeof (array[i]) === 'string') {
        jediName = array[i];
        break;
      }
    }
    const fileName = `./data/${jediName}.txt`;
    const content = array.join(',');
    fs.writeFile(fileName, content);
  });
} // пытался создать файлы по каждому из джедаев, с его именем и оценкой, но что то пошло не так...(

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
