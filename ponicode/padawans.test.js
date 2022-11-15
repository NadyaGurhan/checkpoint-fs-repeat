const padawans = require("../padawans")
// @ponicode
describe("padawans.writeStats", () => {
    test("0", () => {
        let result = padawans.writeStats()
        expect(result).toMatchSnapshot()
    })
})
