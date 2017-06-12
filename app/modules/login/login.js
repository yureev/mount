'use strict';

angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'modules/login/login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
        $rootScope.loginFormInfo = {};
        $scope.validName = function() {
            $scope.nameRequired = '';

            if (!$scope.loginFormInfo.Name) {
                $scope.nameRequired = 'Name Required';
            }
        };
        $scope.validPass = function() {
            $scope.passwordRequired = '';

            if (!$scope.loginFormInfo.Pass) {
                $scope.passwordRequired = 'Password Required';
            }
        };
    }]);