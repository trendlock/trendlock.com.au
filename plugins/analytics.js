const ga = require('universal-ga');

function noop() {}

function analytics(state, emitter) {
  function onPageLoad() {
    ga.initialize('UA-114129788-1');
    ga.pageview(state.route);
  }

  function onNavigate() {
    ga.pageview(state.route);
  }

  emitter.on('DOMContentLoaded', onPageLoad);
  emitter.on('navigate', onNavigate);
}

module.exports = process.env.NODE_ENV === 'production' ? analytics : noop;
