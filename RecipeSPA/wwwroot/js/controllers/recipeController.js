(function () {
    'use strict'

    var app = angular.module('app');

    app.controller('RecipeController', function ($scope,$mdDialog) {

        var self = this;

        self.showModal = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: '../views/recipeModal.html',
                parent: angular.element(document.getElementById('main')),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
                .then(function (answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
        };

    });
})();