'use strict';

/**
 * @ngdoc function
 * @name angularTestsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestsApp
 */
angular.module('angularTestsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
