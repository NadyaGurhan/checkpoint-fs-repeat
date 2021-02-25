const fs = require("fs")
const names = ["Revan", "Bastila Shan", "Jolee Bindo", "Juhani"];
const scores = [99.9, 92, 8, 82];

function toOne(n) {
  return n.map((elem, i) => [elem, scores[i]]);
}

// console.log(toOne(names));

x = toOne(names).join("\n")
console.log(x)

// y = (JSON.stringify(x))
//t = x.join("\n")
//console.log(t)


function writeStats () {
fs.appendFileSync("./tst.txt", x)
}
 

writeStats()


