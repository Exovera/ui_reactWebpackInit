import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import RouterLinks from "layout/RouterLinks";

const Navbar = (props) => {
	const navbarClass = classnames("navbar", { home: props.path === "/" });
	return (
		<div className={navbarClass}>
			<div className="navbar__hamburger" onClick={() => props.clickHamburger()} />
			<RouterLinks />
		</div>
	);
};

Navbar.propTypes = {
	clickHamburger: PropTypes.func.isRequired,
	path: PropTypes.string,
};

export default Navbar;
