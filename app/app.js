'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.about',
  'myApp.contacts',
  'myApp.lorem',
  'myApp.login',
  'myApp.reg',
  'myApp.data'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);


