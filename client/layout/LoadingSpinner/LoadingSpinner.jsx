/* jshint esversion: 6 */

import React from 'react';

import colors from 'config/style/colors.js';
import fonts from 'config/style/fonts.js';

const LoadingSpinner = (props) => {
  return (
    <div className="loading-spinner">
      <div className="bounce-1"></div>
      <div className="bounce-2"></div>
      <div className="bounce-3"></div>
      <style jsx>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          } 40% {
            transform: scale(1.0);
          }
        }

        .loading-spinner {
          position: absolute;
          height: 18px;
          width: 100px;
          top: 50%;
          left: 50%;
          margin: -9px 0 0 -50px;
        }
        .bounce-1,
        .bounce-2,
        .bounce-3 {
          display: inline-block;
          width: 18px;
          height: 18px;
          margin: 0 7px;
          background-color: ${ colors.accent };
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }
        .bounce-1 {
          animation-delay: -0.32s;
        }
        .bounce-2 {
          animation-delay: -0.16s;
  }
      `}</style>
    </div>
  );
};

LoadingSpinner.propTypes = {

};

export default LoadingSpinner;
