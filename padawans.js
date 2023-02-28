const fs = require("fs");
module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};


function getPadawanNames() {
  // let arr = [];
  //получить данные из файла
  const getList = fs.readFileSynk("./data/padawans.txt", "utf8");
  //добавить данные в массив или через сплит
  // arr.push(getList);
  return getList;
  
}
console.log(getPadawanNames());
