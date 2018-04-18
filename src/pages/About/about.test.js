import React from "react";
import Enzyme, { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import About from "./About.jsx";

Enzyme.configure({ adapter: new Adapter() });

function setup(passedProps = {}) {
	const props = {
		activeNarrative: passedProps.activeNarrative || "all",
		// activeNarrativeData: passedProps.activeNarrativeData || null,
		// filtersDisplayText: passedProps.filtersDisplayText || false,
		// scrollbarSize: passedProps.scrollPosition || 15,
		// scrollPosition: passedProps.scrollPosition || 0,
	};

	const enzymeWrapper = mount(<About {...props} />);

	return {
		props,
		enzymeWrapper,
	};
}

describe("About page", () => {
	it('should render self.', () => {
		const { enzymeWrapper } = setup();
		expect(toJSON(enzymeWrapper)).toMatchSnapshot();
	});
});