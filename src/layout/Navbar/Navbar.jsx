import React from "react";
import PropTypes from "prop-types";

import RouterLinks from "config/RouterLinks.jsx";

const Navbar = () => {
	return (
		<div className="navbar">
			<RouterLinks />
		</div>
	);
};

Navbar.propTypes = {};

export default Navbar;
