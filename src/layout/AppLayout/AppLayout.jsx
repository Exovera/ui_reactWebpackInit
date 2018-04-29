import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import LayoutRouter from "./LayoutRouter.jsx";
import RoundSpinner from "genericComponents/RoundSpinner";

const AppLayout = (props) => {
	const layoutClass = classnames("app-layout", { hideFocus: !props.showFocus });
	let payload;
	if (!props.ready) {
		payload = <RoundSpinner />;
	} else {
		payload = (
			<div>
				<LayoutRouter
					history={props.history}
					router={props.router}
					shieldClick={props.shieldClick}
					sideMenuOpen={props.sideMenuOpen}
				/>
			</div>
		);
	}
	return <div className={layoutClass}>{payload}</div>;
};

AppLayout.propTypes = {
	history: PropTypes.object.isRequired,
	router: PropTypes.object.isRequired,
	sideMenuOpen: PropTypes.bool.isRequired,
	shieldClick: PropTypes.func.isRequired,
};

export default AppLayout;
