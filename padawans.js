// const { rejects } = require('assert')
const fs = require('fs')
// const { resolve } = require('path')

const filesWay = '../padawans'
function getPadawanNames(filesWay) {
  return new Promise((resolve, reject) => {
    fs.readFile(filesWay, 'utf8', (errRead, dataRead) => {
      if (errRead) reject(errRead)
      resolve(dataRead)
    })
  })
}

function getLightsaberScores() {

}

function getStats() {

}

function writeStats() {

}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
