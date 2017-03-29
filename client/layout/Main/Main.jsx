/* jshint esversion: 6 */

import React from 'react';

import colors from 'config/style/colors.js';
import fonts from 'config/style/fonts.js';

const Main = (props) => {
  return (
    <div className="main">
      <h1>Howdy World</h1>
      <style jsx>{`
        .main {

        }
        h1 {
          font-family: ${ fonts.mainfontBold };
          color: ${ colors.accent };
        }
      `}</style>
    </div>
  );
};

Main.propTypes = {

};

export default Main;
