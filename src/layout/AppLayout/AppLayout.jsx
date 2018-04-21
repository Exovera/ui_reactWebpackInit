import React from "react";
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
				<LayoutRouter />
			</div>
		);
	}
	return <div className={layoutClass}>{payload}</div>;
};

AppLayout.propTypes = {};

export default AppLayout;
