import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import { AboutLoader } from "loaders";

import Home from "pages/Home";
import Navbar from "layout/Navbar";
import MobileNav from "layout/MobileNav";

const LayoutRouter = (props) => {
	console.log("LayouRouter", props);
	const wrapperClass = classnames("app-layout__content-wrapper", {
		sideMenuOpen: props.sideMenuOpen,
	});
	const shieldClass = classnames("app-layout__menu-open-clickshield", {
		sideMenuOpen: props.sideMenuOpen,
	});
	return (
		<ConnectedRouter history={props.history}>
			<div>
				<MobileNav path={props.router && props.router.location && props.router.location.pathname} />
				<div className={wrapperClass}>
					<div className={shieldClass} onClick={() => props.shieldClick()} />
					<Navbar path={props.router && props.router.location && props.router.location.pathname} />
					<Route exact path="/" component={Home} />
					<Route path="/about" component={AboutLoader} />
				</div>
			</div>
		</ConnectedRouter>
	);
};

LayoutRouter.propTypes = {
	router: PropTypes.object,
	history: PropTypes.object.isRequired,
	sideMenuOpen: PropTypes.bool.isRequired,
	shieldClick: PropTypes.func.isRequired,
};

export default LayoutRouter;
