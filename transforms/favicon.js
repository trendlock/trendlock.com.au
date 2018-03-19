const hstream = require('hstream');

module.exports = transform;

function transform() {
  return hstream({
    head: {
      _appendHtml: [
        '<link rel="icon" type="image/png" href="/assets/icon.png">',
        '<meta name="google-site-verification" content="sEpb5cdT-RwgGOJINpHIH8NGx5y1glv1hR_PkUqlRu0" />',
      ].join(''),
    },
  });
}
