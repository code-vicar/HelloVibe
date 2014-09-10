/* global require */
(function() {
    'use strict';

    require.config({
        paths: {
            app: './',
            bowerComponents: '../bower_components',
            underscore: '../bower_components/underscore/underscore'
        },
        map: {
            '*': {
                text: 'bowerComponents/requirejs-text/text',
            }
        }
    });

    require(['./index', './Routes/routes'], function(idx, routes) {
        var controllerPaths = routes.map(function(r) {
            return r.controller;
        });

        require(controllerPaths, function() {
            var routeDetails = Array.prototype.slice.call(arguments, 0);
            for (var i = 0, len = routeDetails.length; i < len; i++) {
                routeDetails[i].state = routes[i].state;
            }

            var app = angular.module('app', [
                'ui.router',
                'Directives',
                'Models'
            ]);

            app.config([
                'Directives.routeRegistrationProvider',
                function(routeRegistrationProvider) {
                    routeRegistrationProvider.register(routeDetails);
                }
            ]);

            app.run([
                '$state',
                function($state) {
                    $state.go('main');
                }
            ]);

            angular.bootstrap(document, ['app']);
        });
    });
}());
