(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'categories.template.html',
            controller: CategoriesController
        });

    CategoriesController.$inject = ['MenuDataService'];
    function CategoriesController(MenuDataService) {
        var $ctrl = this;

        MenuDataService.getAllCategories()
            .then(function (categories) {
                $ctrl.categories = categories;
            });
    }
})();
