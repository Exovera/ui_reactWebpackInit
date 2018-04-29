import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import { AboutLoader } from "loaders";

import Navbar from "layout/Navbar";
import Home from "pages/Home";

const LayoutRouter = (props) => {
	return (
		<ConnectedRouter history={props.history}>
			<div>
				<Navbar path={props.router && props.router.location && props.router.location.pathname} />

				<Route exact path="/" component={Home} />
				<Route path="/about" component={AboutLoader} />
			</div>
		</ConnectedRouter>
	);
};

LayoutRouter.propTypes = {
	router: PropTypes.object,
	history: PropTypes.object.isRequired,
};

export default LayoutRouter;
