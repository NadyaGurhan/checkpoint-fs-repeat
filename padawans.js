const fs = require('fs');
const PAHT = 'data';
const files = fs.readdirSync(PAHT)
const myFile = () => {
for (let i = 0; i < files.length; i++) {
  const file = fs.readFileSync(`${PAHT}/${files[0]}`, `utf-8`);
fs.appendFileSync
}

}
myFile();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
