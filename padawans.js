function getPadawanNames(){
  let padawans = '';
  const fs = require ('fs');
  const padawansList = fs.readFileSync('./data/padawans.txt', 'utf8');
    padawans = padawansList
    padawans.split('/n').join(' ')
    console.log(padawans)
 return padawans
}

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
