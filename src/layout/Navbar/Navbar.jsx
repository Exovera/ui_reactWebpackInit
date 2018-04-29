import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import RouterLinks from "layout/RouterLinks";

const Navbar = (props) => {
	const navbarClass = classnames("navbar", { home: props.path === "/" });
	return (
		<div className={navbarClass}>
			<RouterLinks />
		</div>
	);
};

Navbar.propTypes = {
	path: PropTypes.string,
};

export default Navbar;
