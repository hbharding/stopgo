'use strict';

var stopgoApp = angular.module('stopgoApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

stopgoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/animate', {
        templateUrl: 'views/animate.html',
        controller: 'animateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);