import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import data from "./data.js";
import ui from "./ui.js";
import home from "./home.js";
import about from "./about.js";

export default combineReducers({
	data,
	ui,
	home,
	about,
	router: routerReducer,
});
