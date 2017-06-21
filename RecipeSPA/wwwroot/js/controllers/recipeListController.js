(function () {
    'use strict'

    var app = angular.module('app');

    app.controller('RecipeListController', function ($scope, $mdDialog) {

        var self = this;

        $scope.recipe = {
            'recipeName': 'Buffalo Wings',
            'servingSize': 4,
            'ingredients': ['12 pieces chicken wings', '1/2 teaspoon chili powder', '1/3 cup hot sauce']
        }

        self.getRecipeData = function (isNew) {
            if (isNew) {
                $scope.recipe = {
                    'recipeName': '',
                    'servingSize': 1,
                    'ingredients': []
                };
            }

            return $scope.recipe;
        }   

        self.showModal = function (ev) {            
            $mdDialog.show({
                locals: { recipeData: this.getRecipeData(ev)},
                controller: recipeController,
                templateUrl: '../views/recipeModal.html',
                parent: angular.element(document.getElementById('main')),
                targetEvent: ev,
                clickOutsideToClose: false,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
                .then(function (answer) {
                    console.log(answer);
                }, function () {
                    
                });
        };

        var recipeController = function ($scope, $mdDialog, $exceptionHandler, recipeData) {

            var self = this;

            $scope.recipe = recipeData;

            $scope.newIngredient = {
                'amount': 1,
                'measurement': 'teaspoon',
                'name': 'beef'
            }

            $scope.addIngredient = function (){ 
                var i = $scope.newIngredient;
                $scope.recipe.ingredients.push(i['amount'] + " " + i['measurement'] + " of " + i['name']);                
            }

            $scope.cancel = function () {
                $mdDialog.cancel();
            };

            $scope.save = function () {  
                alert("Saving recipe");
                $mdDialog.hide($scope.recipe);
            }
        }
    });
})();