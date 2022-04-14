const {sum, throwingFunction} = require('../main.js');

test('add 2 and 2 together, should equal 4', () => {
	expect(sum(2, 2)).toBe(4);
});

test('object assignment', () => {
	const data = {one: 1};
	data['two'] = 2;

	expect(data).toEqual({one: 1, two: 2});
	expect(data).not.toEqual({one: 2, two: 2});
});

test('null', () => {
	const n = null;
	expect(n).toBeNull();
	expect(n).toBeDefined();
	expect(n).toBeFalsy();
});

test('throws error', () => {
	expect(() => throwingFunction()).toThrow();
});
