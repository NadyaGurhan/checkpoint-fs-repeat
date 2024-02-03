function writeStats() {
  const stats = getStats();
  const str = stats.map(stat => `${stat.name}: ${stat.score}`).join(EOL);
  fs.writeFileSync(`${__dirname}/data/stats.txt`, str)
  console.log("Статистика успешно записана");
}

writeStats()