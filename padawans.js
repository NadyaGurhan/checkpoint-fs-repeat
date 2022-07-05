const fs = require('fs');

getPadawanNames = () => {
let result = [];
let path = 'data/padawans.txt';
let datas = fs.readFileSync(path, 'utf-8');
for (let i = 0; i < datas.length; i++) {
result.push(datas);
}
return result;
};
console.log(getPadawanNames());

getPadawanNames = () => {

};

getStats = () => {

};

writeStats = () => {

};

module.exports = {
  getPadawanNames,
  getPadawanNames,
  getStats,
  writeStats,
};
