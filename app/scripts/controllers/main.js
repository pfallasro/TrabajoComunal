'use strict';

/**
 * @ngdoc function
 * @name FCL.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the FCL
 */
angular.module('FCL')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
