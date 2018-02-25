const Nanocomponent = require('nanocomponent');
const onIntersect = require('on-intersect');
const html = require('choo/html');
const xtend = require('xtend');
const css = require('sheetify');

const visible = css`
  :host {
    transition: opacity 500ms ease-in-out;
  }

  :host.visible {
    opacity: 1;
  }
`;

module.exports = class LazyImage extends Nanocomponent {
  constructor(props) {
    super(props);

    this.state = xtend(
      {
        visible: false,
        class: '',
        srcset: '',
      },
      props
    );

    this.onEnter = this.onEnter.bind(this);
    this.onExit = this.onExit.bind(this);
  }

  unload() {
    if (this.stopObserving) {
      this.stopObserving();
    }

    this.state.visible = false;
  }

  createElement(contents) {
    return html`
      <div class="o-50 ${visible} ${this.state.visible ? 'visible' : ''}">
        ${contents}
      </div>
    `;
  }

  beforerender(el) {
    this.stopObserving = onIntersect(
      el,
      {
        rootMargin: '-40%',
      },
      this.onEnter,
      this.onExit
    );
  }

  onEnter() {
    if (!this.state.visible) {
      this.state.visible = true;
      this.rerender();
    }
  }

  onExit() {
    if (this.state.visible) {
      this.state.visible = false;
      this.rerender();
    }
  }

  update() {}
};
