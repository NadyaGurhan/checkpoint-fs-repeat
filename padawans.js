const fs = require('fs')

fs.readFileSync(path, options?): string
const result = fs.readFileSync("/etc/passwd", { encoding: "utf-8" })




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
