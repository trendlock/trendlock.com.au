const Nanocomponent = require('nanocomponent');
const onIntersect = require('on-intersect');
const html = require('choo/html');
const xtend = require('xtend');

module.exports = class LazyImage extends Nanocomponent {
  constructor(props) {
    super(props);

    this.state = xtend(
      {
        visible: false,
        class: '',
        srcset: '',
        alt: '',
      },
      props
    );

    this.onEnter = this.onEnter.bind(this);
  }

  unload() {
    if (this.stopObserving) {
      this.stopObserving();
    }

    this.state.visible = false;
  }

  createElement() {
    const src = this.state.visible ? this.state.src : '';
    const srcset = this.state.visible ? this.state.srcset : '';

    return html`
      <img class="${this.state.class}" srcset="${srcset}" src="${src}" alt="${
      this.state.alt
    }" />
    `;
  }

  beforerender(el) {
    this.stopObserving = onIntersect(el, this.onEnter);
  }

  onEnter() {
    if (!this.state.visible) {
      this.state.visible = true;
      this.rerender();
    }
  }

  update() {}
};
