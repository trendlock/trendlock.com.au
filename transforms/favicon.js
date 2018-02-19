const hstream = require('hstream');

module.exports = transform;

function transform() {
  return hstream({
    head: {
      _appendHtml: [
        '<link rel="icon" type="image/png" href="/assets/icon.png">',
      ].join(''),
    },
  });
}
