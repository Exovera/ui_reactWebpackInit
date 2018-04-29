import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import _ from "underscore";

import RouterLinks from "layout/RouterLinks";

const MobileNav = (props) => {
	const mobileNavClass = classnames("mobile-nav", {
		home: props.path === "/",
		open: props.sideMenuOpen,
	});
	return (
		<div className={mobileNavClass}>
			<RouterLinks />
		</div>
	);
};

MobileNav.propTypes = {
	path: PropTypes.string,
	sideMenuOpen: PropTypes.bool.isRequired,
};

export default MobileNav;
