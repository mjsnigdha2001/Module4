(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$routeProvider'];
    function RoutesConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.template.html'
            })
            .when('/categories', {
                template: '<categories></categories>'
            })
            .when('/items/:categoryShortName', {
                template: '<items></items>',
                resolve: {
                    categoryShortName: ['$route', function ($route) {
                        return $route.current.params.categoryShortName;
                    }]
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
