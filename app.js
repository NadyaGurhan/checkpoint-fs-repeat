const fs = require('fs')

function getPadawanNames() {
// fs.readFileSync('./data/padawans.txt', 'utf8')
// .split(', ')
return fs.readFileSync('./data/padawans.txt', 'utf8')
.split(', ')
}

function getLightsaberScores() {

}

function getStats (){

}

function writeStats() {

}

module.exports = {getPadawanNames}
    //  getLightsaberScores, getStats, writeStats}