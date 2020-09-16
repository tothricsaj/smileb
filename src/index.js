import {testFunc} from './view/view.js'
import Pic from './assets/emojis/00A9.png'

testFunc()

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item)
    })
  return images
}

// require.context -> https://webpack.js.org/guides/dependency-management/
const images = importAll(require.context('./assets/emojis', false, /\.(png|jpe?g|svg)$/))

console.log(`Pic -> ${Pic}`)
document.querySelector('#myImg1').src = Pic
document.querySelector('#myImg2').src = images['1F3A7.png'].default

console.log('hello from index.js')