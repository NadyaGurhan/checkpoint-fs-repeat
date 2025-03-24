const fs = require('fs');
const { console } = require('inspector');


function getPadawanNames(){
  const files = fs.readdirSync('./data');
  const padawansFile = files.find (name=>name === 'padawans.txt');
  const fileData = fs.readFileSync(`./data/${padawansFile}`, 'utf-8');
  const name = fileData
  .split('\n')
  .map(name=>name.trim())
  .filter(Boolean)

  return name
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};