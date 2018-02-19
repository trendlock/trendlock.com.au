module.exports = scroll;

function scroll(state, emitter) {
  emitter.on(state.events.NAVIGATE, () => {
    window.scrollTo(0, 0);
  });
}
