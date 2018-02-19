const html = require('choo/html');
const Navigation = require('./navigation');

const navigation = new Navigation();
const TITLE = 'Trendlock';

let chat = '';

if (process.env.NODE_ENV === 'production') {
  chat = html`<script src="https://client.crisp.chat/l.js" async></script>`;
}

module.exports = wrapper;

function wrapper(view) {
  return function(state, emit) {
    if (state.title !== TITLE) {
      emit(state.events.DOMTITLECHANGE, TITLE);
    }

    return html`
      <body class="dark-pink">
        ${navigation.render({
          href: state.href || '/',
        })}
        ${view(state, emit)}
        ${chat}
        <script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
      </body>
    `;
  };
}
