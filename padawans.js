const fs = require('fs')
const path = require('path');

const readRext1 = fs.readFileSync(
    path.join(__dirname, './data/padawans.txt'),
    'utf8',
  );

const readRext2 = fs.readFileSync(
    path.join(__dirname, './data/scores.txt'),
    'utf8',
);


function getPadawanNames() {
  let arrPad = readRext1.split('\r\n')
  let arrrrr = arrPad.slice(arrPad.length - 1)
  return arrrrr
}


function getLightsaberScores() {
  const arrsab = readRext2.split('\r\n')
  const arrayOfDigits = Array.from(arrsab, Number);
  return arrayOfDigits
}


function getStats() {

  let arrPad = readRext1.split('\r\n')

  const arrsab = readRext2.split('\r\n')
  const arrayOfDigits = Array.from(arrsab, Number);

  const newarr = [...arrPad, ...arrayOfDigits]
  return newarr
}

console.log(getStats());

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
