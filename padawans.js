const path = require('path');
const fs = require('fs');

function getArrFromTxt(pathToFile) {
    const fileContent = fs.readFileSync(path.resolve(__dirname, pathToFile), 'utf8');
    const arr = fileContent.split(/[\n]/);
    return arr;
}

function getPadawanNames() {
    const arr = getArrFromTxt('./data/padawans.txt');
    return arr;
}

function getLightsaberScores() {
    let arr = getArrFromTxt('./data/scores.txt');
    arr = arr.map((el) => (el = +el));
    return arr;
}

function getStats() {
    const padawans = getArrFromTxt('./data/padawans.txt');
    let scores = getArrFromTxt('./data/scores.txt');
    scores = scores.map((el) => (el = +el));
    const resultArr = [];
    for (let i = 0; i < padawans.length; i += 1) {
        resultArr.push([padawans[i], scores[i]]);
    }
    return resultArr;
}

function writeStats() {
    // fs.unlinkSync('./data/stats.txt');
    const stats = getStats();
    const resultArr = [];
    for (let i = 0; i < stats.length; i += 1) {
        const str = `${stats[i][0]} ${stats[i][1]}`;
        resultArr.push(str);
    }
    const filePath = './data/stats.txt';
    fs.appendFile(filePath, resultArr.join('\n'), (err) => {
        if (err) throw err;
    });
}

module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
};
