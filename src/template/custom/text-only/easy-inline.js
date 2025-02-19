//grab the first, second or third pipe..
let templates = {
  p1: 0,
  p2: 1,
  p3: 2,
  resize: 1, //https://en.wikipedia.org/wiki/'Resize',
  lang: 1,
  'rtl-lang': 1,
  'line-height': 1,
  l: 2,
  h: 1, //https://en.wikipedia.org/wiki/'Hover_title',
  sort: 1, //https://en.wikipedia.org/wiki/'Sort',
}

//templates that we simply grab their insides as plaintext
let zeros = [
  'defn',
  'lino', //https://en.wikipedia.org/wiki/'Linum',
  'finedetail', //https://en.wikipedia.org/wiki/'Finedetail',
  'nobold',
  'noitalic',
  'nocaps',
  'vanchor', //https://en.wikipedia.org/wiki/'Visible_anchor',
  'rnd',
  'date', //Explictly-set dates - https://en.wikipedia.org/wiki/'Date',
  'taste',
  'monthname',
  'baseball secondary style',
  'nowrap',
  'nobr',
  'big',
  'cquote',
  'pull quote',
  'smaller',
  'midsize',
  'larger',
  'big',
  'kbd',
  'bigger',
  'large',
  'mono',
  'strongbad',
  'stronggood',
  'huge',
  'xt',
  'xt2',
  '!xt',
  'xtn',
  'xtd',
  'dc',
  'dcr',
  'mxt',
  '!mxt',
  'mxtn',
  'mxtd',
  'bxt',
  '!bxt',
  'bxtn',
  'bxtd',
  'delink', //https://en.wikipedia.org/wiki/'Delink',
  'pre',
  'var',
  'mvar',
  'pre2',
  'code',
  'char',
  'angle bracket',
  'angbr',
  'symb',
  'dabsearch',
  'key press', //needs work - https://en.m.wikipedia.org/wiki/'Key_press',
  // these should escape certain chars
  'nowiki',
  'nowiki2',
  'unstrip',
  'unstripnowiki',
  'plain text',
  'make code',
  'killmarkers',
  'longitem',
  'longlink',
  'strikethrough',
  'underline',
  'uuline',
  'not a typo',
  'text',
  'var serif',
  'double underline',
  'nee',
  'ne',
  'left',
  'right',
  'center',
  'centered',
  'justify',
  'smalldiv',
  'bold div',
  'monodiv',
  'italic div',
  'bigdiv',
  'strikethroughdiv',
  'strikethrough color',
  'pbpe'//pt
]
zeros.forEach((k) => {
  templates[k] = 0
})


export default templates
