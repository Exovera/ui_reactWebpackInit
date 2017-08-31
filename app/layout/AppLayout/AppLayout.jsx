import React from 'react';

import RoundSpinner from 'genericComponents/RoundSpinner';
import Main from 'layout/Main';

// Single LESS entry point for the whole app
import 'config/less/main.less';

const AppLayout = (props) => {
  let payload;
  if (!props.ready) {
    payload = <RoundSpinner />;
  } else {
    payload = <div>
                <Main />
              </div>;
  }
  return (
    <div className="app-layout">
      {payload}
    </div>
  );

};

AppLayout.propTypes = {

};

export default AppLayout;
