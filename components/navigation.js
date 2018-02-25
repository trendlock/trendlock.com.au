const Nanocomponent = require('nanocomponent');
const html = require('choo/html');
const raw = require('choo/html/raw');
const css = require('sheetify');
const xtend = require('xtend');
const raf = require('raf');

const navigation = css`
  :host {
    transform: translate3d(0, 0, 0);
    transition: transform 350ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

const hideNavigation = css`
  :host {
    transform: translate3d(0, calc(-100% + 0.5rem), 0);
  }
`;

module.exports = class Navigation extends Nanocomponent {
  constructor() {
    super();

    this.state = {
      scrollY: 0,
      active: true,
      aboveFold: true,
      placeholder: false,
      border: true,
      links: [],
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  load() {
    const self = this;
    setTimeout(() => {
      self.frame = raf(self.handleScroll);
      self.state.active = true;
      self.rerender();
    }, 100);
  }

  unload() {
    raf.cancel(this.frame);
    this.state.active = false;
    this.state.scrollY = 0;
  }

  createElement(props) {
    this.state = xtend(this.state, props);
    this.elementNavigation = this.renderNavigation();
    return html`
      <div>
        ${this.elementNavigation}
        ${this.state.placeholder === false ? '' : this.renderPlaceholder()}
      </div>
    `;
  }

  handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY === this.state.scrollY) {
      this.frame = raf(this.handleScroll);
    } else {
      if (scrollY > this.state.scrollY && scrollY > 100) {
        this.hide();
      } else {
        this.show();
      }

      if (scrollY < this.getBoundingHeight()) {
        this.aboveFold();
      } else {
        this.belowFold();
      }

      this.state.scrollY = scrollY;
      this.frame = raf(this.handleScroll);
    }
  }

  getBoundingHeight() {
    if (typeof this.state.getBoundingHeight === 'function') {
      return this.state.getBoundingHeight();
    }
    return window.innerHeight;
  }

  aboveFold() {
    if (!this.state.aboveFold) {
      this.state.aboveFold = true;
      this.rerender();
    }
  }

  belowFold() {
    if (this.state.aboveFold) {
      this.state.aboveFold = false;
      this.rerender();
    }
  }

  show() {
    if (!this.state.active) {
      this.state.active = true;
      this.rerender();
    }
  }

  hide() {
    if (this.state.active) {
      this.state.active = false;
      this.rerender();
    }
  }

  renderNavigation() {
    const hidden = this.state.active ? '' : hideNavigation;

    return html`
      <header class="fixed z-1 flex justify-between items-center bg-white h3 pa3 bb bw3 w-100 ${navigation} ${hidden}">
        <a href="/" class="h-100 link dim" title="Trendlock Home">
          <img class="h-100" src="/assets/TL_locklogo_pink.svg" />
          <img class="h-100" src="/assets/title.svg" />
        </a>
        <ul class="list pa0 ma0">
          <li>
            <a class="link black bg-animate hover-bg-dark-pink" href="/consulting">
              Consulting
            </a>
          </li>
        </ul>
      </header>
    `;
  }

  renderPlaceholder() {
    return html`
      <div class="py0-5">${raw('&nbsp;')}</div>
    `;
  }

  renderLink(props) {
    let activeClass;

    if (this.state.href === '/' && props.url === '/') {
      activeClass = true;
    } else if (props.url !== '/' && this.state.href.indexOf(props.url) >= 0) {
      activeClass = true;
    }

    return html`
      <div class="px0-5 psr ${activeClass ? 'fc-pinker' : ''}">
        <a href="${props.url}" class="tdn">${props.title}</a>
      </div>
    `;
  }

  update(props) {
    return props.href !== this.state.href;
  }
};
