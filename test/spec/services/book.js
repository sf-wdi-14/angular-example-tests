'use strict';

describe('Service: Book', function() {
	beforeEach(module("angularTestsApp"));

	var $injector,
			Book;

	beforeEach(inject(function() {
		$injector = angular.injector([ 'angularTestsApp' ]);
		Book = $injector.get( 'Book' );
	}));

	describe('#all()', function() {
		it('returns an empty array', function() {
			expect(Book.all()).toEqual([]);
		});
	});
});
