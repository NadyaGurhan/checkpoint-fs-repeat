const fs = require("fs");




function createPadawansSummary(padwans_file_path, scores_file_path)
{
    let padawans = fs.readFileSync(padwans_file_path, "utf-8")
        .split("\n")
        .filter((str) => str !== "");

    let scores = fs.readFileSync(scores_file_path, "utf-8")
        .split("\n")
        .filter((str) => str !== "");

    scores.forEach((num_str, idx) => { scores[idx] = parseFloat(num_str); });

    return { padawans, scores };
}

let { padawans, scores } = createPadawansSummary("./data/padawans.txt", "./data/scores.txt");




function getPadawanNames()
{
    return padawans;
}

function getLightsaberScores()
{
    return scores;
}

function getStats()
{
    return padawans.map((name, idx) => [name, scores[idx]]);
}

function writeStats()
{
    let stats_data = padawans
        .reduce((result, name, idx) => result += `${name} ${scores[idx]}\n`, "");

    fs.writeFileSync("./data/stats.txt", stats_data.slice(0, -1));
}




module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
};
