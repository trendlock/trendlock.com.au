const html = require('choo/html');
const raw = require('choo/html/raw');
const css = require('sheetify');
const feather = require('feather-icons');
const TriggerAnimation = require('../components/trigger-animation');

const animateDeepDive = new TriggerAnimation();
const animateDataProspecting = new TriggerAnimation();
const animateDataExtraction = new TriggerAnimation();
const animateDataRefinement = new TriggerAnimation();
const animateAnalysisAutomation = new TriggerAnimation();
const animateVisualisation = new TriggerAnimation();
const animateInteraction = new TriggerAnimation();

const background = css`
  :host {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(/assets/city_teal_pink@1x.jpg);
  }

  @media (min-width: 30em), (min-resolution: 200dpi) {
    :host {
      background-image: url(/assets/city_teal_pink@2x.jpg);
    }
  }

  @media (min-width: 60em) {
    :host {
      background-image: url(/assets/city_teal_pink-big-@1x.jpg);
    }
  }

  @media (min-width: 60em), (min-resolution: 200dpi) {
    :host {
      background-image: url(/assets/city_teal_pink-big-@2x.jpg);
    }
  }
`;

const logoHeight = css`
  :host {
    height: 8rem;
  }

  @media (min-width: 30em) {
    :host {
      height: 12rem;
    }
  }
`;

const easingGradient = css`
  :host {
    background: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.003) 9.9%,
      hsla(0, 0%, 0%, 0.014) 19.8%,
      hsla(0, 0%, 0%, 0.034) 29.6%,
      hsla(0, 0%, 0%, 0.063) 39.1%,
      hsla(0, 0%, 0%, 0.102) 48.3%,
      hsla(0, 0%, 0%, 0.151) 57%,
      hsla(0, 0%, 0%, 0.21) 65%,
      hsla(0, 0%, 0%, 0.278) 72.2%,
      hsla(0, 0%, 0%, 0.355) 78.6%,
      hsla(0, 0%, 0%, 0.438) 84.1%,
      hsla(0, 0%, 0%, 0.527) 88.8%,
      hsla(0, 0%, 0%, 0.619) 92.6%,
      hsla(0, 0%, 0%, 0.714) 95.6%,
      hsla(0, 0%, 0%, 0.814) 97.9%,
      hsla(0, 0%, 0%, 0.913) 99.4%,
      hsl(0, 0%, 0%) 100%
    );
  }
`;

module.exports = view;

function view() {
  return html`
    <main class="center bg-black">
      <div class="vh-100 w-100 flex-ns items-end cover ${background}">
        <div class="vh-100 flex flex-auto flex-column justify-center tc near-white ${easingGradient}">
          <h1 class="mh4">
            <img class="${logoHeight}" src="/assets/title-glow.svg" alt="Trendlock consulting"/>
          </h1>
        </div>
      </div>
      <section class="center ml4 w-two-thirds-ns tc f4-ns lh-copy pa3">
        <div>
          <p>Outsourced / automated analytics and data-wrangling</p>
        </div>
        <div>
          <p>The days of having teams of analysts wrestling with spreadsheets in excel, or an expensive proprietary software system that handles all your analysis and manipulation, are drawing to a close.</p>
        </div>
        <div>
          <p>Open-source programming languages are revolutionising the way in which data-analysis is performed. It will be agile, automated, and networked more than ever before. Trendlock assists data-driven companies to move into the next generation of intelligent and automated data systems.</p>
        </div>
        <div>
          <p>Trendlock engineers custom solutions for businesses or organisations to gain the maximum intelligence and insight from data.</p>
        </div>
      </section>
      <section class="center ml4 w-75-l tc f5-ns lh-copy pa3 pb7">
        <div>
          <h2 class="f1">Separate services:</h2>
        </div>
        ${animateDeepDive.render(html`
          <div class="flex-ns items-center mb6">
            <div class="w-third-l w-50-m">
              <h3 class="f2 mt0">Deep Dives</h3>
              ${raw(
                feather.icons.crosshair.toSvg({height: '48px', width: '48px'})
              )}
            </div>
            <div class="ml4-ns w-75-l w-50-m">
              <p class="tl">
                Have an high-value question that needs a quality quantitative answer? Need a specialised graphic or visualisation to to feature in a report, website or article? Trendlock is available for one-off contracting pieces to deliver the results you need, when you need them.
              </p>
            </div>
          </div>
        `)}
        ${animateDataProspecting.render(html`
        <div class="flex-ns items-center mb6">
          <div class="w-third-l w-50-m">
            <h3 class="f2 mt0">Data Prospecting</h3>
            ${raw(feather.icons.compass.toSvg({height: '48px', width: '48px'}))}
          </div>
          <div class="ml4-ns w-75-l w-50-m">
            <p class="tl">
              Some companies know they’re sitting on a pile of data, but don’t know if it’s a scrap-heap or a gold-mine. Others don’t even realise how much data that they have at their finger-tips, from their own systems (accounts, emails, CRM, websites, tills, inventory management, phone bills etc) or from other sources, including public reports, social media, industry newsletters, competitor advertising etc. Contact Trendlock to help discover how to tap into the value of the data that’s around you. The power of open-source programming will allow us to quickly drill down into the core of your data, and scrape across the surface of the web, to discover what valuable intelligence could be gained.
            </p>
          </div>
        </div>
        `)}
        ${animateDataExtraction.render(html`
        <div class="flex-ns items-center mb6">
          <div class="w-third-l w-50-m">
            <h3 class="f2 mt0">Data Extraction</h3>
            ${raw(feather.icons.package.toSvg({height: '48px', width: '48px'}))}
          </div>
          <div class="ml4-ns w-75-l w-50-m">
            <p class="tl">
              Knowing where the data lies is only the first step. Sometimes it’s buried deep within web-pages or social-media. Sometimes it’s in tables in the appendices to monthly or annual reports. Or it could be in a collection of different file-types that have come from legacy systems or various alternative platforms’ output forms. Whatever the challenge, the open-source language of R is the largest and fastest-growing tool-kit for accessing data in hard-to-get places. Contact Trendlock for expert help for all your data-mining needs, including web-scraping, document mining, table conversions, pdf extractions, graph-to-data, and more.
            </p>
          </div>
        </div>
        `)}
        ${animateDataRefinement.render(html`
        <div class="flex-ns items-center mb6">
          <div class="w-third-l w-50-m">
            <h3 class="f2 mt0">Data Refinement and Fusion</h3>
            ${raw(feather.icons.filter.toSvg({height: '48px', width: '48px'}))}
          </div>
          <div class="ml4-ns w-75-l w-50-m">
            <p class="tl">
              Data rarely arrives clean and tidy. Invariably there are bits of data missing, breaks in series, inconsistent intervals, incoherent naming systems, errors, outliers, and much more. The team at Trendlock are experts at cleaning and wrangling data, and giving it all the attributes and indexes to make sure it’s ready to do work on or combine with another data source. Once refined into an appropriate, pure and clean form, each stream or stock of data can be fused together with others, revealing new insights and creating a unique source of data which can give your company a competitive edge. The explosion of different data capture systems has created in its wake a massive trail of stove-piped, disintegrated data-streams. Trendlock specialises in finding the keys (time-stamps, credit card numbers, employee IDs, locations, URLs) that can re-build as much structure and dimensionality as possible to data-sources which were originally fragmented and flattened at their source.
            </p>
          </div>
        </div>
        `)}
        ${animateAnalysisAutomation.render(html`
        <div class="flex-ns items-center mb6">
          <div class="w-third-l w-50-m">
            <h3 class="f2 mt0">Analysis and Automation</h3>
            ${raw(
              feather.icons['trending-up'].toSvg({
                height: '48px',
                width: '48px',
              })
            )}
          </div>
          <div class="ml4-ns w-75-l w-50-m">
            <p class="tl">
              The tools and technologies for statistical big-data analysis, machine-learning and artificial intelligence is growing so fast that a programming language has evolved just for it, called R. Whether it’s a massive multi-variate regression, a random-forest or neural network, there are tools and machines being built for it daily in R, and we work with them all. Not only is the team at Trendlock fluent in the R language, but we also have a deep background in physics and statistics, so we can help you navigate the mathematics and logic behind the programming to optimise the power of your analysis. Once the best techniques and tools for analysis have been found, we can build the structures to automate the process of analysis. Right from selecting and filtering the right data to feed in, detecting change-points and triggering decision trees we can create a system that intelligently applies the right techniques to get the hard work of analysis to happen automatically.
            </p>
          </div>
        </div>
        `)}
        ${animateVisualisation.render(html`
        <div class="flex-ns items-center mb6">
          <div class="w-third-l w-50-m">
            <h3 class="f2 mt0">Visualisation</h3>
            ${raw(feather.icons.eye.toSvg({height: '48px', width: '48px'}))}
          </div>
          <div class="ml4-ns w-75-l w-50-m">
            <p class="tl">
              The end consumers of almost all analysis are human, and the best way to present data is visual. Trendlock can put your data in a form where it makes even the most complex of data easy to understand. We love using host of open-source tools to create graphics, visualisations, and even animations to demonstrate clearly what is going on in the data. We can also easily export these as images, or in pdfs, tables, HTML, or Word documents.
            </p>
          </div>
        </div>
        `)}
        ${animateInteraction.render(html`
        <div class="flex-ns items-center mb6">
          <div class="w-third-l w-50-m">
            <h3 class="f2 mt0">Interaction</h3>
            ${raw(feather.icons.sliders.toSvg({height: '48px', width: '48px'}))}
          </div>
          <div class="ml4-ns w-75-l w-50-m">
            <p class="tl">Often for analysis it’s important to keep a human in or on the loop, to allow freedom for some parameters to be changed, different visualisation to be used, new data added, different outputs selected, or methods and techniques adjusted. Trendlock builds secure interactive web apps for clients to have their own personalised means to control their own data analysis.</p>
          </div>
        </div>
        `)}
      </section>
    </main>
  `;
}
