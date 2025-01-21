const fs = require('fs')
const {EOL} = require('os');

const getPadawanNames = () {
const data = fs.readFileSyn('./data/padawans.txt' , 'utf-8')
const names= data.split(EOL)
const result = [];
 for ( let i = 0; i < names.length; i ++) {
  names.push(names[i].trim())
}
return names
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
