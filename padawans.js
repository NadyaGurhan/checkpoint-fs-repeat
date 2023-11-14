const fs = require('fs');
const path = require('path');
const getPadawanNames = () =>{
  const data = fs.readFileSync(path.resolve(__dirname, './data/padawans.txt'), "utf8");
  let array = data.split('\r\n');
  array.pop();
  return array;
};

const getLightsaberScores = () =>{
  const data = fs.readFileSync(path.resolve(__dirname, './data/scores.txt'), "utf8");
  let array = data.split('\r\n');
  return array.map(item => Number(item));
};

const getStats = () =>{
  let data = fs.readFileSync(path.resolve(__dirname, './data/scores.txt'), "utf8").split('\r\n');
  const data2 = fs.readFileSync(path.resolve(__dirname, './data/padawans.txt'), "utf8").split('\r\n');
  data2.pop();
  data = data.map(item => Number(item));
  const result = data2.map((el, index) => el = [el, data[index]]);
  return result;
};

const writeStats = () => {
  let data = fs.readFileSync(path.resolve(__dirname, './data/scores.txt'), "utf8").split('\r\n');
  const data2 = fs.readFileSync(path.resolve(__dirname, './data/padawans.txt'), "utf8").split('\r\n');
  data2.pop();
  const result = data2.map((el, index) => el = [el, data[index]]);
  fs.writeFileSync(path.resolve(__dirname, './data/stats.txt'), result.join('\n').replaceAll(',', ' '));
};


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


