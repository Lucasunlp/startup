'use strict';

let myapp = angular.module('myapp', ["ngRoute",
                                     "LocalStorageModule",
                                     "primerCtrl","ngStorage","detalleCtrl"
                                     ]);


myapp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "movieList.html",
        controller : "primerController"
    })
    .when("/detalles/:movie", {
        templateUrl : "detalles.html",
        controller : "detalleController"
    })
    // ,"editarCtrl"
    //.when("/editar/:movie", {
    //     templateUrl : "editar.html",
    //     controller : "editarController"
    // })
    .otherwise({redirectTo:'/'});
});

myapp.config (['$locationProvider',function($locationProvider){

    $locationProvider.hashPrefix('');

}]);

