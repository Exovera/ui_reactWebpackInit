/* jshint esversion: 6 */

import React from 'react';

import LoadingSpinner from 'layout/LoadingSpinner/index.js';
import Main from 'layout/Main/index.js';

import colors from 'config/style/colors.js';
import fonts from 'config/style/fonts.js';

const AppLayout = (props) => {
  let payload;
  if(!props.ready){
    payload = <LoadingSpinner />;
  } else {
    payload = <div>
                <Main />
              </div>;
  }
  return (
    <div className="app-layout">
      {payload}

      <style jsx>{`
        .app-layout {

        }
        `}</style>
        <style jsx global>{`
          /* Global reset */
          /* http://meyerweb.com/eric/tools/css/reset/
             v2.0 | 20110126
             License: none (public domain)
          */

          /* HTML5 display-role reset for older browsers */
          article, aside, details, figcaption, figure,
          footer, header, hgroup, menu, nav, section {
            display: block;
          }
          html, body, div, span, applet, object, iframe,
          h1, h2, h3, h4, h5, h6, p, blockquote, pre,
          a, abbr, acronym, address, big, cite, code,
          del, dfn, em, img, ins, kbd, q, s, samp,
          small, strike, strong, sub, sup, tt, var,
          b, u, i, center,
          dl, dt, dd, ol, ul, li,
          fieldset, form, input, label, legend,
          table, caption, tbody, tfoot, thead, tr, th, td,
          article, aside, canvas, details, embed,
          figure, figcaption, footer, header, hgroup,
          menu, nav, output, ruby, section, summary,
          time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
            box-sizing: border-box;
          }
          body {
            line-height: 1;
            // font-size: 62.5%;
          }
          ol, ul {
            list-style: none;
          }
          blockquote, q {
            quotes: none;
              &:before, &:after {
                  content: '';
                  content: none;
              }
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }
          textarea {
            overflow: auto;
          }
          a {
            text-decoration: none;
          }

          /* Global Styles */
          a, div, p, span {
            transition: opacity 350ms ease-out 50ms, color 350ms ease-out 50ms, background-color 350ms ease-out 50ms;
          }

          /* Fonts */
          @font-face {
            font-family: 'RalewayRegular';
            src:  url('/fonts/raleway-regular-webfont.eot');
            src:  url('/fonts/raleway-regular-webfont.eot?#iefix') format('embedded-opentype'),
                  url('/fonts/raleway-regular-webfont.woff') format('woff'),
                  url('/fonts/raleway-regular-webfont.ttf') format('truetype'),
                  url('/fonts/raleway-regular-webfont.svg#svgFontName') format('svg');
          }
          @font-face {
            font-family: 'RalewaySemibold';
            src:  url('/fonts/raleway-semibold-webfont.eot');
            src:  url('/fonts/raleway-semibold-webfont.eot?#iefix') format('embedded-opentype'),
                  url('/fonts/raleway-semibold-webfont.woff') format('woff'),
                  url('/fonts/raleway-semibold-webfont.ttf') format('truetype'),
                  url('/fonts/raleway-semibold-webfont.svg#svgFontName') format('svg');
          }
          @font-face {
            font-family: 'RalewayLight';
            src:  url('/fonts/raleway-light-webfont.eot');
            src:  url('/fonts/raleway-light-webfont.eot?#iefix') format('embedded-opentype'),
                  url('/fonts/raleway-light-webfont.woff') format('woff'),
                  url('/fonts/raleway-light-webfont.ttf') format('truetype'),
                  url('/fonts/raleway-light-webfont.svg#svgFontName') format('svg');
          }

          @font-face {
            font-family: 'OpenSansSemibold';
            src:  url('/fonts/opensans-semibold-webfont.eot');
            src:  url('/fonts/opensans-semibold-webfont.eot?#iefix') format('embedded-opentype'),
                  url('/fonts/opensans-semibold-webfont.woff') format('woff'),
                  url('/fonts/opensans-semibold-webfont.ttf') format('truetype'),
                  url('/fonts/opensans-semibold-webfont.svg#svgFontName') format('svg');
          }
          @font-face {
            font-family: 'OpenSansRegular';
            src:  url('/fonts/opensans-regular-webfont.eot');
            src:  url('/fonts/opensans-regular-webfont.eot?#iefix') format('embedded-opentype'),
                  url('/fonts/opensans-regular-webfont.woff') format('woff'),
                  url('/fonts/opensans-regular-webfont.ttf') format('truetype'),
                  url('/fonts/opensans-regular-webfont.svg#svgFontName') format('svg');
          }

        `}</style>
    </div>
  );

};

AppLayout.propTypes = {

};

export default AppLayout;
