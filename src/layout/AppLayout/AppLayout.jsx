import React from "react";
import classnames from "classnames";

import Navbar from "layout/Navbar";
import RoundSpinner from "genericComponents/RoundSpinner";

// Single LESS entry point for the whole app
import "config/less/main.less";

const AppLayout = (props) => {
	const layoutClass = classnames("app-layout", { hideFocus: !props.showFocus });
	let payload;
	if (!props.ready) {
		payload = <RoundSpinner />;
	} else {
		payload = (
			<div>
				<Navbar />
				<h1>Howdy World;</h1>
			</div>
		);
	}
	return <div className={layoutClass}>{payload}</div>;
};

AppLayout.propTypes = {};

export default AppLayout;
