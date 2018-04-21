// This renders the app to the DOM. That's it.

import React from "react";
import ReactDOM from "react-dom";

import AppContainer from "./AppContainer.jsx";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<AppContainer />, document.getElementById("root"));
registerServiceWorker();
