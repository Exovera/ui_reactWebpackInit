// testing expect.toBeType, which is in config/jestSetup.js
describe("testing extended expect", () => {
	it("tests normal types correctly", () => {
		expect("").toBeType("string");
		expect({}).toBeType("object");
		expect(1).toBeType("number");
	});
	it("tests array types correctly", () => {
		expect([]).toBeType("array");
	});
	it("works with promises", () => {
		expect(Promise.resolve([])).resolves.toBeType("array");
	});
});