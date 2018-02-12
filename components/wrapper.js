var Navigation = require('./navigation')
var html = require('choo/html')

var navigation = new Navigation()
var TITLE = 'Trendlock'

module.exports = wrapper

function wrapper (view) {
  return function (state, emit) {
    if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

    return html`
      <body class="dark-pink">
        ${navigation.render({
          href: state.href || '/'
        })}
        ${view(state, emit)}
        <script src="https://client.crisp.chat/l.js" async></script>
        <script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
      </body>
    `
  }
}
