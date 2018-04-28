// This file should be the single source of all navigation links for the app - top navigation and mobile
//		sidebar. Each links gets a unique class, so they can be styled individually if necessary in
//		different contexts.

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { AboutLoader } from "loaders";

const RouterLinks = () => {
	return (
		<ul className="router-links">
			<li className="router-links__link home-link">
				<Link to="/">Home</Link>
			</li>
			<li className="router-links__link about-link">
				<Link onMouseOver={() => AboutLoader.preload()} to="/about">
					About
				</Link>
			</li>
		</ul>
	);
};

RouterLinks.propTypes = {};

export default RouterLinks;
