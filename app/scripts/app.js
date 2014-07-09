'use strict';

/**
 * @ngdoc overview
 * @name socialjusticeApp
 * @description
 * # socialjusticeApp
 *
 * Main module of the application.
 */
angular
  .module('socialjusticeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'google-maps',
    'ngAutocomplete',
    'angularCharts',
    'checklist-model',
    'ui.bootstrap.showErrors'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/about'
      });
  });


