const keys = ["height", "width"];
const values = ["12px", "24px"];

var result = {};
keys.forEach((key, idx) => result[key] = values[idx]);

console.log(Object.entries(result));

