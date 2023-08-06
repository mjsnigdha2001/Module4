(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // Set up default state to 'home'
        $urlRouterProvider.otherwise('/');

        // Set up UI states
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'categories.template.html',
                controller: 'CategoriesController as categoriesCtrl',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories().then(function(response) {
                            return response.data;
                        });
                    }]
                }
            })
            .state('items', {
                url: '/items/{categoryShortName}',
                templateUrl: 'items.template.html',
                controller: 'ItemsController as itemsCtrl',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function(response) {
                            return response;
                        });
                    }]
                }
            });
    }
})();
