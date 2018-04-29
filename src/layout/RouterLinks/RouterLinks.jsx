// This file should be the single source of all navigation links for the app - top navigation and mobile
//		sidebar. Each links gets a unique class, so they can be styled individually if necessary in
//		different contexts.

// NOTE: the products dropdown is actually a modal, and should be updated outside this file.

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { AboutLoader } from "loaders";

const RouterLinks = (props) => {
	return (
		<ul className="router-links">
			<li className="router-links__li home-link">
				<Link to="/" className="router-links__link">
					Home
				</Link>
			</li>
			<li className="router-links__li about-link">
				<Link onMouseOver={() => AboutLoader.preload()} to="/about" className="router-links__link">
					About
				</Link>
			</li>
		</ul>
	);
};

RouterLinks.propTypes = {};

export default RouterLinks;
