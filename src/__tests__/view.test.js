const view = require("../view/view")

test('Testing jest install', () => {
    expect(view.jestTestFunc()).toMatch(/hello jest/)
})