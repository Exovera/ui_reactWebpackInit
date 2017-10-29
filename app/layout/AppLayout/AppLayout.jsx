import React from 'react';
import classnames from 'classnames';

import RoundSpinner from 'genericComponents/RoundSpinner';
import Main from 'layout/Main';

// Single LESS entry point for the whole app
import 'config/less/main.less';

const AppLayout = (props) => {
  const layoutClass = classnames('app-layout', { hideFocus: !props.showFocus });
  let payload;
  if (!props.ready) {
    payload = <RoundSpinner />;
  } else {
    payload = <div>
                <Main />
              </div>;
  }
  return (
    <div className={layoutClass}>
      {payload}
    </div>
  );

};

AppLayout.propTypes = {

};

export default AppLayout;
