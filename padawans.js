const fs = require('fs');


getPadawanNames = () => {
    const data = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1)
    return data
}
getLightsaberScores = () => {
        const dateSecond = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(Number)
        return dateSecond
    }
    // console.log(getLightsaberScores())

getStats = () => {
    let names = getPadawanNames()
    let scores = getLightsaberScores()

    return names.map((el, i) => [el, scores[i]]);
}
console.log(getStats())

writeStats = () => {
    const fourDate = getStats()
    return fs.writeFileSync('./data/stats.txt', fourDate.map((el) => el.join(' ')).join('\n'));

}
console.log(writeStats())





module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
};