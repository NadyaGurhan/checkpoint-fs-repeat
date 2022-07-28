const fs = require('fs')

function getPadawanNames() {
  return getRows('./data/', 'padawans.txt');
}

function getLightsaberScores() {
  // return getRows('./data/', 'scores.txt').map((e) => Number(e));
  return getRows('./data/', 'scores.txt').map(Number);

}

function getStats() {
  let names = getPadawanNames();
  let evaluation = getRows('./data/', 'scores.txt');
  
  let stats = []

  for (let i = 0; i < names.length; i++) {
    // let person = []
    // person.push(names[i]);
    // person.push(Number(evaluation[i]));

    stats.push([names[i], Number(evaluation[i])]);
  };

  return stats
}

function writeStats() {
  if (fs.existsSync('./data/stats.txt')) {
    fs.unlinkSync('./data/stats.txt');
  }

  let arr = getStats()
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i].join(' ').trim());
  //   fs.appendFileSync('data/stats.txt', arr[i].join(' ').trim() +'\n');
  //   };
  const newData = arr.join('\n').split(',').join(' ')
  fs.appendFileSync('data/stats.txt', newData);
} 

function getRows(path, filename) {
  const readFileLines = filename =>
    fs
      .readFileSync(filename)
      .toString('UTF8')
      .split('\n');

  let rows = readFileLines(`${path}${filename}`, 'utf-8').filter((el) => el != '');
  return rows;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
