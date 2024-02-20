const fs = require("fs")

const getPadawanNames = () => {
	const str = fs.readFileSync("./data/padawans.txt", "utf8")
	const result = str.split("\n")
	result.pop()
  // console.log(result)
	return result
}
// getPadawanNames()

const getLightsaberScores = ()=>{
  const str = fs.readFileSync("./data/scores.txt", "utf8");
  const res = str.split('\n');
  let result = res.map(Number);
  // console.log(result)
	return result
}

// getLightsaberScores()

const getStats = () =>{
  const result = [];
  let names = getPadawanNames()
	let scores = getLightsaberScores()
  for (let i =3; i>=0; i--){
    result.push([`${names[i]},` + scores[i]]);
  }
  // console.log(result)
  return result
}
// getStats ()

module.exports = {
	getPadawanNames,
	getLightsaberScores,
	// getStats,
	// writeStats,
}
