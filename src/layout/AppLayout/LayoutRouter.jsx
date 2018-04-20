import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from "layout/Navbar";
import About from "pages/About";
import Home from "pages/Home";

const LayoutRouter = () => {
	return (
		<Router>
			<div>
				<Navbar />

				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
			</div>
		</Router>
	);
};
export default LayoutRouter;
