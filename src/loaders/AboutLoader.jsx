import React from "react";
import Loadable from "react-loadable";

import RoundSpinner from "genericComponents/RoundSpinner";

const AboutLoader = Loadable.Map({
	loader: {
		AboutComponent: () => import(/* webpackChunkName: "about" */ "pages/About"),
	},
	loading: RoundSpinner,
	render(loaded, props) {
		const About = loaded.AboutComponent.default;
		return <About />;
	},
});

export default AboutLoader;
