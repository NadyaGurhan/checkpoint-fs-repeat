function getPadawanNames() {
  return fs.readdirSync(`data/padawans.txt`);
}
module.exports = getPadawanNames();