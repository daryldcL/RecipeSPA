(function () {
    'use strict'

    var app = angular.module('app');

    app.controller('chipController', function ($scope) {
        var self = this;
        self.readonly = false;
        // Lists of fruit names and Vegetable objects
        self.fruitNames = ['1 kg pork', '500 g beef cuts', '5 tbsp soy sauce'];
        //self.roFruitNames = angular.copy(self.fruitNames);
        //self.tags = [];
        //self.vegObjs = [
        //    {
        //        'name': 'Broccoli',
        //        'type': 'Brassica'
        //    },
        //    {
        //        'name': 'Cabbage',
        //        'type': 'Brassica'
        //    },
        //    {
        //        'name': 'Carrot',
        //        'type': 'Umbelliferous'
        //    }
        //];
        //self.newVeg = function (chip) {
        //    return {
        //        name: chip,
        //        type: 'unknown'
        //    };
        //};
    })

})()