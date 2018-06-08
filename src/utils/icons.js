import Ionicons from 'react-native-vector-icons/Ionicons'

const icons = [
  { name: 'logo-usd', size: 25 },
  { name: 'ios-search', size: 30 },
  { name: 'ios-close', size: 30 },
  { name: 'ios-add', size: 30 },
  { name: 'md-globe', size: 30 },
  { name: 'md-document', size: 30 },
  { name: 'md-person', size: 30 }
]

const iconsMap = {}

const iconsLoaded = new Promise((resolve, reject) => {

  const sources = icons.map(icon => {
    return Ionicons.getImageSource(icon.name, icon.size)
  })

  Promise.all(sources).then(results => {
    icons.forEach((icon, index) => (iconsMap[icon.name] = results[index]))
    resolve(true)
  })
})

export { iconsMap, iconsLoaded }
