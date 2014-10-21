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
<<<<<<< HEAD
    'google-maps'.ns(),
    'ngAutocomplete',
    'mgcrea.ngStrap',
    'angularCharts',
    'multi-select',
    'checklist-model',
    'djangoRESTResources',
    'ngTagsInput',
    'angucomplete'
=======
    'google-maps',
    'ngAutocomplete',
    'angularCharts',
    'checklist-model',
    'ui.bootstrap.showErrors'
>>>>>>> master
  ])

  .config(function ($routeProvider) {
    //,$resourceProvider
    //$resourceProvider.defaults.stripTrailingSlashes = false;
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


