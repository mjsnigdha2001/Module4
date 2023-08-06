(function () {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'items.template.html',
            controller: ItemsController,
            bindings: {
                categoryShortName: '<'
            }
        });

    ItemsController.$inject = ['MenuDataService'];
    function ItemsController(MenuDataService) {
        var $ctrl = this;

        MenuDataService.getItemsForCategory($ctrl.categoryShortName)
            .then(function (items) {
                $ctrl.items = items;
            });
    }
})();
