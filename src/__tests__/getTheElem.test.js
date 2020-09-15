document.body.innerHTML = `
    <div>
        <p class="smileBInput">foo bar baz</p>
    </div>
`

// <input class="smileBInput" type="text" placeholder="Type your text..." />

const gte = require('../view/getTheElem')
const $ = require('jquery')

describe('Testing getTheElement', () => {
    it('Get element lists', () => {
        expect(NodeList.prototype.isPrototypeOf(gte.getTheElem())).toEqual(true)
        expect(gte.getTheElem()).toBeTruthy()
    })
});