function getPadawanNames() {
    const newArr = [];
    newArr = fs.readFileSync("data/padawans.txt", "utf8").split(",");
    return newArr;
}
module.exports = getPadawanNames;