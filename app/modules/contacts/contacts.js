'use strict';

angular.module('myApp.contacts', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/contacts', {
            templateUrl: 'modules/contacts/contacts.html',
            controller: 'ContactsCtrl'
        });
    }])

    .controller('ContactsCtrl', [function() {

    }]);