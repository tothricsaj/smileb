import {testFunc} from './view/view.js'
import Pic from './assets/emojis/00A9.png'

testFunc()
console.log(`Pic -> ${Pic}`)
document.querySelector('#myImg').src = Pic
console.log('hello from index.js')