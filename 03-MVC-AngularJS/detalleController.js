let detalleCtrl = angular.module('detalleCtrl',[]); // se rompe cuando lo paso"ngRoute"
		detalleCtrl.controller('detalleController',function($scope,localStorageService,$routeParams) {

			var array =localStorageService.get('localStorageService');
			$scope.nombre = array[$routeParams.movie].nombre;
			$scope.duracion = array[$routeParams.movie].duracion;
		});