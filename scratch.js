var wtf = require('./src/index')
// var wtf = require('./builds/wtf_wikipedia')
wtf.extend(require('./plugins/image/src'))

// let txt = require('fs')
//   .readFileSync('/Users/spencer/mountain/wtf_wikipedia/tests/cache/royal_cinema.txt')
//   .toString()

// let str = `hello [[bs:cool]]`
// console.log(wtf(str).text())

// const doc = wtf('hello [[fr:world]]')
// const doc = wtf('hello [[world]]')

// wtf.fetch('State (website)').then(doc => {
//   let links = doc.links()
//   console.log(links.map(l => l.json()))
// })
const doc = wtf('hello [http://cool.com ext] and [[int]] and [[fr:french]]')
// const doc = wtf(`
// *[https://twitter.com/state  @State]`)
console.log(doc.links().map(l => l.json()))
