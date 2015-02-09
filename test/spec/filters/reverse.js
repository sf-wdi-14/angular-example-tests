'use strict';

describe('Filter: Reverse', function() {
	beforeEach(module('angularTestsApp'));

	beforeEach(inject(function($filter, reverseFilter) {}));

	it('has a reverse filter', function($filter) {
		expect($filter('reverse')).not.toBeNull();
	});

	it('reverses a given string', function(reverseFilter) {
		expect(reverseFilter('hello')).toEqual('olleh');
	});
});
