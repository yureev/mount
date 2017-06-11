'use strict';

angular.module('myApp.lorem', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/lorem', {
            templateUrl: 'modules/lorem/lorem.html',
            controller: 'LoremCtrl'
        });
    }])

    .controller('LoremCtrl', [function() {

    }]);