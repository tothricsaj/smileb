const loadEmoji = require('../view/emojiLoader').default

describe('EmojiLoader testing', () => {
    it('Existing staff', () => {
        expect(loadEmoji('foo')).toEqual('foo')
    })
})