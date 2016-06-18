'use strict';
/**
 * @ngdoc overview
 * @name FCL:routes
 * @description
 * # routes.js
 *
 * Configure routes for use with Angular, and apply authentication security
 */
angular.module('FCL')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl'
      })

      .when('/proyectos', {
        templateUrl: 'views/proyectosSociales.html'
        // controller: 'ProyectosCtrl'
      })

      .otherwise({redirectTo: '/'});
  }]);
