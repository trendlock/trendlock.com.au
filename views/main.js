var html = require('choo/html')
var raw = require('choo/html/raw')
var css = require('sheetify')
var feather = require('feather-icons')
var LazyImage = require('../components/lazy-image')

var lazyReinventure = new LazyImage({
  alt: 'reinventure',
  class: 'h3-ns',
  src: '/assets/reinventure-logo@2x.png',
  srcset: '/assets/reinventure-logo.png 1x, /assets/reinventure-logo@2x.png 2x'
})

var lazyWestpack = new LazyImage({
  alt: 'westpack',
  class: 'h3-ns',
  src: '/assets/wbg-logo.svg'
})

var lazyAidan = new LazyImage({
  alt: 'avatar',
  class: 'h4 w4 ba br-100 bw2 b--white',
  src: '/assets/aidan@2x.png',
  srcset: '/assets/aidan.png 1x, /assets/aidan@2x.png 2x'
})

var lazyRoss = new LazyImage({
  alt: 'avatar',
  class: 'h4 w4 ba br-100 bw2 b--white',
  src: '/assets/ross@2x.png',
  srcset: '/assets/ross.png 1x, /assets/ross@2x.png 2x'
})

var background = css`
  :host {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(/assets/bc_photo@1x.jpg);
  }

  @media (min-width: 30em), (min-resolution: 150dpi) {
    :host {
      background-image: url(/assets/bc_photo@2x.jpg);
    }
  }

  @media (min-width: 60em) {
    :host {
      background-image: url(/assets/bc_photo.jpg);
    }
  }
`

var easingGradient = css`
  :host {
    background: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.004) 9.9%,
      hsla(0, 0%, 0%, 0.016) 19.8%,
      hsla(0, 0%, 0%, 0.038) 29.5%,
      hsla(0, 0%, 0%, 0.075) 38.8%,
      hsla(0, 0%, 0%, 0.127) 47.3%,
      hsla(0, 0%, 0%, 0.196) 54.6%,
      hsla(0, 0%, 0%, 0.278) 60.4%,
      hsla(0, 0%, 0%, 0.369) 64.7%,
      hsla(0, 0%, 0%, 0.464) 67.8%,
      hsla(0, 0%, 0%, 0.562) 70.2%,
      hsla(0, 0%, 0%, 0.662) 72.3%,
      hsla(0, 0%, 0%, 0.761) 74.6%,
      hsla(0, 0%, 0%, 0.857) 77.9%,
      hsla(0, 0%, 0%, 0.939) 83.4%,
      hsla(0, 0%, 0%, 0.99) 92%,
      hsl(0, 0%, 0%) 100%
    );
  }
`

var flexEven = css`
  :host {
    flex: 1 1 0;
  }
`

module.exports = view

function view (state, emit) {
  return html`
    <main class="center bg-black">
      <div class="vh-100 w-100 flex items-end cover ${background}">
        <div class="vh-100 flex flex-auto flex-column justify-end tc near-white ${easingGradient}">
          <h1>
            <span className="sr-only">Trendlock</span>
            <img class="h3 h4-ns" src="/assets/title-white.svg" alt="Trendlock logo"/>
          </h1>
          <hr class="w-10-ns w-20" />
          <h2 class="f3 f2-m f1-ns lh-title">
            Big data for small business
          </h2>
        </div>
      </div>
      <section class="center w-two-thirds-ns tc f3-ns lh-copy pa3">
        <p>
          Trendlock helps hospitality and retail operators know when the rushes and lulls are coming so that they can make sure they have the right staff and stock on hand.
        </p>
      </section>
      <section class="flex flex-column flex-row-l justify-around tc f3 lh-copy pa3">
        <div class="pa3 ${flexEven}">
          <p>
            Sales Forecasting
          </p>
          ${raw(feather.icons.map.toSvg({ height: '48px', width: '48px' }))}
        </div>
        <div class="pa3 ${flexEven}">
          <p>
            Business Insights
          </p>
          ${raw(
            feather.icons.settings.toSvg({ height: '48px', width: '48px' })
          )}
        </div>
        <div class="pa3 ${flexEven}">
          <p>
            Predictive Analytics
          </p>
          ${raw(
            feather.icons['folder-plus'].toSvg({
              height: '48px',
              width: '48px'
            })
          )}
        </div>
      </section>
      <section class="center w-two-thirds-ns tc f3-ns lh-copy pa3">
        <p>
          Using machine learning, ensembling statistical models and external data Trendlock can help make the most of the rich data sets of down to the second sales to help you expect the unexpected.
        </p>
      </section>
      <section class="tc f3-ns lh-copy pa3 bg-white f3 lh-copy">
        <h3>
          Proudly supported by
        </h3>
        <div class="flex flex-column flex-row-l justify-around">
          <div class="pb4">
            ${lazyReinventure.render()}
          </div>
          <div class="pb4">
            ${lazyWestpack.render()}
          </div>
        </div>
      </section>
      <div class="flex flex-column flex-row-ns justify-around">
        <article class="pa3 pa4-ns">
          <div class="tc">
            <h3>Aidan Morrison</h3>
            ${lazyAidan.render()}
            <div class="flex justify-center lh-solid">
              <a href="mailto:aidan@trendlock.com.au" class="link dark-pink dim dib pa4">
                ${raw(feather.icons.mail.toSvg())}
              </a>
              <a href="https://twitter.com/QuixoticQuant" class="link dark-pink dim dib pa4">
              ${raw(feather.icons.twitter.toSvg())}
              </a>
            </div>
          </div>
        </article>
        <article class="pa3 pa4-ns">
          <div class="tc">
            <h3>Ross Ireland</h3>
            ${lazyRoss.render()}
            <div class="flex justify-center lh-solid">
              <a href="mailto:ross@trendlock.com.au" class="link dark-pink dim dib pa4">
                ${raw(feather.icons.mail.toSvg())}
              </a>
              <a href="https://twitter.com/RossTrendlock" class="link dark-pink dim dib pa4">
              ${raw(feather.icons.twitter.toSvg())}
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  `
}
