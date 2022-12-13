const fs = require('fs')

const getPadawanNames = () => fs
    .readFileSync('./data/padawans.txt', 'utf8')
    .trim()
    .split('\n');

const getPadawanScores = () => fs
    .readFileSync('./data/scores.txt', 'utf8')
    .trim()
    .split('\n')
    .map(Number);

const getStats = () => {
    const padawans = getPadawanNames();
    const scores = getPadawanScores();
    return padawans
        .map((el, index) => {
            return [padawans[index], scores[index]];
        })
};

const writeStats = () => {
    let stats = '';
    const padawans = getPadawanNames();
    const scores = getPadawanScores();
    padawans.forEach((el, index) => {
        if (index !== padawans.length - 1) {
            stats = `${stats}${padawans[index]} ${scores[index]}\n`;
        } else {
            stats = `${stats}${padawans[index]} ${scores[index]}`;
        }
    });
    fs.writeFileSync('./data/stats.txt', stats.trim(), 'utf8');
};

console.log(writeStats())
