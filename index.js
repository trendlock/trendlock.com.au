const css = require('sheetify');
const choo = require('choo');
const wrapper = require('./components/wrapper');

css`
  @font-face {
    font-family: 'PT Mono';
    font-style: normal;
    font-weight: 400;
    src: url(/assets/pt-mono-latin-400.woff2) format('woff2');
    src: url(/assets/pt-mono-latin-400.woff) format('woff');
    unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02bb-02bc, U+02c6, U+02da,
      U+02dc, U+2000-206f, U+2074, U+20ac, U+2122, U+2212, U+2215;
  }

  body {
    font-family: 'PT Mono', monaco, monospace;
  }

  /*
  Only display content to screen readers
  
  See: http://a11yproject.com/posts/how-to-hide-content/
  See: https://hugogiraudel.com/2016/10/13/css-hide-and-seek/
  */

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
`;

css('tachyons');

const app = choo();

if (process.env.NODE_ENV === 'production') {
  app.use(require('choo-service-worker')());
} else {
  app.use(require('choo-devtools')());
}

app.use(require('./plugins/analytics'));
app.use(require('./plugins/scroll'));

app.route('/', wrapper(require('./views/main')));
app.route('consulting', wrapper(require('./views/consulting')));
app.route('/*', wrapper(require('./views/404')));

global.$crisp = [];
global.CRISP_WEBSITE_ID = '6e7a3b58-e4fd-43ab-b473-68cc0675587b';

if (module.parent) {
  module.exports = app;
} else {
  app.mount('body');
}
