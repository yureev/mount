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
        $scope.validLogin = function() {
            $scope.loginRequired = '';

            if (!$scope.loginFormInfo.Login) {
                $scope.loginRequired = 'Login Required';
            }
        };
        $scope.validPass = function() {
            $scope.passwordRequired = '';

            if (!$scope.loginFormInfo.Pass) {
                $scope.passwordRequired = 'Password Required';
            }
        };
        $scope.validAuth = function(item) {

            if (($scope.loginFormInfo.Pass === 'admin' && $scope.loginFormInfo.Login === 'admin') && (item === 'login')) {
                $rootScope.auth = true;
            } else {
                $rootScope.auth = false;
            }
        };
    }]);