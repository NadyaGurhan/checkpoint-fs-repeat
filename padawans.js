const fs = require('fs');

module.exports = {
  function getPadawanNames() {
   const names = getPadawanNames(fs.readFileSync(".data/padawans.txt", "New text"););
   return $`[names]`;
}
  function getLightsaberScores() {
    const scores = getLightsaberScores(fs.readFileSync("data/scores.txt", "utf8");)
    return $`[scores]`;
  }
 function getStats(){
  const names = getStats(fs.readFileSync(".data/padawans.txt", "New text");
  const scores = getLightsaberScores(fs.readFileSync("data/scores.txt", "utf8");)
  const stats = names.push('scores')
  // Полагаю, что здесь следует использовать цикл, но сделать уже не успеваю)

 }
  writeStats,
}
