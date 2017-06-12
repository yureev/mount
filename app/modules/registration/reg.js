'use strict';

angular.module('myApp.reg', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/reg', {
            templateUrl: 'modules/registration/reg.html',
            controller: 'RegCtrl'
        });
    }])

    .controller('RegCtrl', ['$rootScope', function($rootScope) {
        $rootScope.regFormInfo = {};
    }]);