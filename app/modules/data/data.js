'use strict';

angular.module('myApp.data', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/data', {
            templateUrl: 'modules/data/data.html',
            controller: 'DataCtrl'
        });
    }])

    .controller('DataCtrl', [function() {

    }]);