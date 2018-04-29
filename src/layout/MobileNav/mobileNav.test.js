import React from "react";
import Enzyme, { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import MobileNav from "./MobileNav.jsx";

Enzyme.configure({ adapter: new Adapter() });

function setup(passedProps = {}) {
	const props = {
		test: passedProps.test || true,
	};

	const enzymeWrapper = mount(<MobileNav {...props} />);

	return {
		props,
		enzymeWrapper,
	};
}

describe("MobileNav", () => {
	it("should render MobileNav component", () => {
		const { enzymeWrapper, props } = setup({
			test: false,
		});
		expect(toJSON(enzymeWrapper)).toMatchSnapshot();
	});
});
