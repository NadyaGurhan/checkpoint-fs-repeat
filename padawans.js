const fs = require('fs');
const { get } = require('https');


function getPadawanNames() {
    const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').filter(el => el !== '');
    return padawans;
}

function getLightsaberScores() {
    const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').filter(el => el !== '').map(elem => elem = +elem);
    return scores;
}



function getStats() {
    const pads = getPadawanNames();
    const score = getLightsaberScores();
    const result = [];
    for (let i = 0; i < pads.length; i++) {
        result.push([pads[i], score[i]]);
    }
    return result;
}

function writeStats() {
    const content = getStats();

    let str = '';
    for (let i = 0; i < content.length; i++) {
        if (i == content.length - 1) {
            str += `${content[i].join(' ')}`;
        } else {
            str += `${content[i].join(' ')}\n`;
        }
    }
    fs.writeFileSync('./data/stats.txt', str);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
