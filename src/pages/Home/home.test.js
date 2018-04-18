import React from "react";
import Enzyme, { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home.jsx";

Enzyme.configure({ adapter: new Adapter() });

function setup(passedProps = {}) {
	const props = {
		activeNarrative: passedProps.activeNarrative || "all",
		// activeNarrativeData: passedProps.activeNarrativeData || null,
		// filtersDisplayText: passedProps.filtersDisplayText || false,
		// scrollbarSize: passedProps.scrollPosition || 15,
		// scrollPosition: passedProps.scrollPosition || 0,
	};

	const enzymeWrapper = mount(<Home {...props} />);

	return {
		props,
		enzymeWrapper,
	};
}

describe("Home page", () => {
	it('should render self.', () => {
		const { enzymeWrapper } = setup();
		expect(toJSON(enzymeWrapper)).toMatchSnapshot();
	});
});