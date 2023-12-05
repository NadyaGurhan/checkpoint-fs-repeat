const fs = require("fs");
const {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
} = require("../padawans");

describe("Статистика о падаванах", () => {
  it("getPadawanNames возвращает список падаванов из файла `data/padawans.txt`", () => {
    const names = getPadawanNames();
    expect(names).toEqual(["Revan", "Bastila Shan", "Jolee Bindo", "Juhani"]);
  });
  test("getPadawanNames возвращает правильное количество падаванов", () => {
    const names = getPadawanNames();
    expect(names.length).toBe(4);
  });

  it("getPadawanScores возвращает оценки владения световым мечом из файла `data/scores.txt`", () => {
    const names = getLightsaberScores();
    expect(names).toEqual([99.9, 92, 87, 82]);
  });

  test("getPadawanScores возвращает массив чисел", () => {
    const scores = getLightsaberScores();
    expect(Array.isArray(scores)).toBe(true);
    expect(scores.every((score) => typeof score === "number")).toBe(true);
  });

  it("getStats возвращает таблицу соответствия падавана и оценки владения световым мечом", () => {
    const stats = getStats();
    expect(stats).toEqual([
      ["Revan", 99.9],
      ["Bastila Shan", 92],
      ["Jolee Bindo", 87],
      ["Juhani", 82],
    ]);
  });

  it("checkForMissingEntries возвращает отсутствующие записи о падаванах", () => {
    const missingEntries = getStats();
    expect(missingEntries).toEqual(["Mission Vao", "Zaalbar"]);
  });

  it("writeStats сохраняет статистику в файл `data/stats.txt`", () => {
    const stats = getStats();
    writeStats(stats);
    const data = fs.readFileSync("data/stats.txt", "utf8");
    expect(data).toBe("Revan 99.9\nBastila Shan 92\nJolee Bindo 87\nJuhani 82");
  });
  it('updateStats обновляет статистику падавана и его оценку владения световым мечом', () => {
    updateStats('Mission Vao', 78);
    const updatedStats = getStats();
    expect(updatedStats).toEqual([
      ['Revan', 99.9],
      ['Bastila Shan', 92],
      ['Jolee Bindo', 87],
      ['Juhani', 82],
      ['Mission Vao', 78]
    ]);
  });
  });

