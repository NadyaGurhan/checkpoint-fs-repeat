const fs = require("fs");
module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};

// it('getPadawanNames возвращает список падаванов из файла `data/padawans.txt`', () => {
//   const names = getPadawanNames();
//   expect(names).toEqual(['Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani']);
// });

let filePath = ".data/padawans.txt";
const data = fs.readFileSync(filePath, "utf-8");
function getPadawanNames() {
  return data;
}
