const fs = require("fs");

const getPadawanNames = () => {
  const name = fs
    .readFileSync("./data/padawans.txt", "utf8")
    .split("\n")
    .slice(0, 4);
  return name;
};
