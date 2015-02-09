'use strict';

app.directive('plain', function() {
	return {
		link: function(scope, element, attrs) {
			element.addClass('plain');
		}
	};
});
