import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from "layout/Navbar";
import { AboutLoader } from "loaders";
import Home from "pages/Home";

const LayoutRouter = () => {
	return (
		<Router>
			<div>
				<Navbar />

				<Route exact path="/" component={Home} />
				<Route path="/about" component={AboutLoader} />
			</div>
		</Router>
	);
};
export default LayoutRouter;
