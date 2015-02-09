describe("Directive: plain", function() {
	var element;
	var $scope;

	beforeEach(module("angularTestsApp"));
	
	beforeEach(inject(function($compile, $rootScope) {
		$scope = $rootScope;
		element = angular.element("<div plain></div>");
		$compile(element)($rootScope)
	}));

	describe("plain", function() {
		it("adds a class of plain", function() {
			expect(element.hasClass("plain")).toBe(true);
		})
	})
})
