import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Navbar from "./Navbar.jsx";

Enzyme.configure({ adapter: new Adapter() });

function setup(passedProps = {}) {
	const props = {
		activeNarrative: passedProps.activeNarrative || "all",
		// baseTrend: passedProps.baseTrend || mockNarratives[0],
		// darkUI: passedProps.darkUI || true,
		// granularity: passedProps.granularity || { granularity: 180, unit: "days", msValue: 86400000 },
		// filters: passedProps.filters || [],
		// filtersActive: passedProps.filtersActive || false,
		// filtersEdited: passedProps.filtersEdited || false,
		// filtersList: passedProps.filtersList || [],
		// narratives: passedProps.narratives || mockNarratives,
		// perspective: passedProps.perspective || "Source",
	};

	const enzymeWrapper = mount(<Navbar {...props} />);

	return {
		props,
		enzymeWrapper,
	};
}

describe("Navbar", () => {
	it("should render self", () => {
		const { enzymeWrapper } = setup();
		// DOM rendering (incomplete)
		expect(enzymeWrapper.find("div.navbar").exists()).toBe(true);
	});
});