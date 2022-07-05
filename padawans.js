const fs = require('fs');

const getPadawanNames = () => {
let result = [];
let path = './data/padawans.txt';
let datas = fs.readFileSync(path, 'utf-8').trim().split('\n');
return datas;
};
console.log(getPadawanNames());

const getStats = () => {

};

const writeStats = () => {

};

module.exports = {
  getPadawanNames,
  getStats,
  writeStats,
};
