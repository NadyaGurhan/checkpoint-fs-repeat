const { log } = require('console')
const fs = require('fs')
const {EOL} = require('os')




const getPadawanNames = () => fs.readFileSync(`./data/padawans.txt`, 'utf-8').split(`${EOL}`).filter(el => el !== '')

const  getLightsaberScores = () => fs.readFileSync(`./data/scores.txt`, 'utf-8').split(`${EOL}`).map(el => Number(el))

const getStats = () => {
  const padawans =fs.readFileSync(`./data/padawans.txt`, 'utf-8').split(`${EOL}`).filter(el => el !== '')
  const scores = fs.readFileSync(`./data/scores.txt`, 'utf-8').split(`${EOL}`).map(el => Number(el))
  const res = []
  padawans.forEach((el, index) => res.push([padawans[index], scores[index]]))
 return res
}

const writeStats = arr => {
  const stats = arr.map(el => `${el[0]} ${el[1]}`).join(`${EOL}`)
  fs.writeFileSync('./data/stats.txt', stats)

}

getStats()



 module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
  };
  