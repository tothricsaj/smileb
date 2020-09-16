function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item)
    })
  return images
}

export default function loadEmoji(emojiHex) {
    // require.context -> https://webpack.js.org/guides/dependency-management/
    const images = importAll(require.context('../assets/emojis', false, /\.(png|jpe?g|svg)$/))
    return images[emojiHex].default
}