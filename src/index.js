// This renders the app to the DOM. That's it.

import React from "react";
import ReactDOM from "react-dom";

import AppContainer from "./AppContainer.jsx";
import registerServiceWorker from "./registerServiceWorker";

// for hot reloading
if (module.hot) {
	module.hot.accept();
}

ReactDOM.render(<AppContainer />, document.getElementById("root"));
registerServiceWorker();
