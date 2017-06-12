'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.about',
  'myApp.contacts',
  'myApp.lorem',
  'myApp.login',
  'myApp.reg'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);

// .controller('AppCtrl', ['$scope', '$window', function ($scope, $window) {
//   $scope.menu = true;
//   console.log(menu);
//
//   angular.element(document).on('click', function (event) {
//     $scope.menu = false;
//   });
//
//   angular.element('#1').on('click', function (event) {
//     $scope.menu = true;
//   });
//
// }]);


