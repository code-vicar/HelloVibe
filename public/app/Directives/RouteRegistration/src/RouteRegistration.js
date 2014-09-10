define(function() {
    'use strict';

    var routeReg = angular.module('Directives.routeRegistration', ['ui.router']);

    routeReg.provider('Directives.routeRegistration', [
        '$stateProvider', '$urlRouterProvider',
        function routeRegistrationProvider($stateProvider, $urlRouterProvider) {

            function registerRoute(route) {
                $stateProvider.state(route.state, {
                    url: route.url,
                    controller: route.controller,
                    template: route.template,
                    resolve: route.resolve
                });
            }

            this.register = function register(routes) {
                console.log(routes);

                routes.forEach(registerRoute);

                $urlRouterProvider.otherwise('/');
            };

            this.$get = [function routeRegistrationFactory() {

            }];
        }
    ]);
});
