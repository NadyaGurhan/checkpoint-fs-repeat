const fs = require("fs");
//const scoresData = fs.readFileSync(`${__dirname}/data/scores.txt`, `utf-8`);
//const padawansData = fs.readFileSync(`${__dirname}/data/padawans.txt`, `utf-8`);

module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
};

function getPadawanNames() {
    let padawansData = fs.readFileSync(
        `${__dirname}/data/padawans.txt`,
        `utf-8`
    );
    let names = padawansData.split("\n");
    return names;
}

function getLightsaberScores() {
    let scores = fs.readFileSync(`${__dirname}/data/scores.txt`, `utf-8`);
    let grade = scores.split("\n");
    return grade;
}

function getStats() {
    let padawansData = fs.readFileSync(
        `${__dirname}/data/padawans.txt`,
        `utf-8`
    );
  let scores = fs.readFileSync(`${__dirname}/data/scores.txt`, `utf-8`).split('\n').map(elem => elem.trim());
  let arr = [];
  for (let i = 0; i < scores )
}
