import {testFunc} from './view/view.js'
import Pic from './assets/emojis/00A9.png'
import loadEmoji from './view/emojiLoader.js'

testFunc()

console.log(`Pic -> ${Pic}`)
document.querySelector('#myImg1').src = Pic
document.querySelector('#myImg2').src = loadEmoji('1F3A7.png')

console.log('hello from index.js')