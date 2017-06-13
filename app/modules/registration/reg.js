'use strict';

angular.module('myApp.reg', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/reg', {
            templateUrl: 'modules/registration/reg.html',
            controller: 'RegCtrl'
        });
    }])

    .controller('RegCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {
        $rootScope.regFormInfo = {};
        $scope.validLogin = function() {
            $scope.loginRequired = '';

            if (!$scope.regFormInfo.Login) {
                $scope.loginRequired = 'Login Required';
            }
        };
        $scope.validName = function() {
            $scope.nameRequired = '';

            if (!$scope.regFormInfo.Name) {
                $scope.nameRequired = 'Name Required';
            }
        };
        $scope.validSurname = function() {
            $scope.surnameRequired = '';

            if (!$scope.regFormInfo.Surname) {
                $scope.surnameRequired = 'Surname Required';
            }
        };
        $scope.validMail = function() {
            $scope.mailRequired = '';

            if (!$scope.regFormInfo.Mail) {
                $scope.mailRequired = 'Mail Required';
            }
        };
        $scope.validPass = function() {
            $scope.passwordRequired = '';

            if (!$scope.regFormInfo.Pass) {
                $scope.passwordRequired = 'Password Required';
            }
        };
    }]);