
angular.module('todomvc', ['ngRoute', 'ngResource'])
	.config(function ($routeProvider) {
		'use strict';
		// 'todomvc-index.html',
		var routeConfig = {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html',
			resolve: {
				store: function (todoStorage) {
					// Get the correct module (API or localStorage).
					return todoStorage.then(function (module) {
						module.get(); // Fetch the todo records in the background.
						return module;
					});
				}
			}
		};
		var routeConfig2 = {
			controller: 'detalleController',
			templateUrl: 'view/detalles.html',
			// resolve: {
			// 	store: function (todoStorage) {
			// 		// Get the correct module (API or localStorage).
			// 		return todoStorage.then(function (module) {
			// 			module.get(); //Busca los registros de toDo
			// 			return module;
			// 		});
			// 	}
			// }
		};
		var routeConfig3 = {
			controller: 'guardarController',
			templateUrl: 'view/alta.html',
			resolve: {
				store: function (todoStorage) {
					// Get the correct module (API or localStorage).
					return todoStorage.then(function (module) {
						module.get(); // Fetch the todo records in the background.
						return module;
					});
				}
			}
		};
		// var routeConfig4 = {
		
		// 	templateUrl: 'view/prueba.html',
			
		// };
		var routeConfig5 = {
			controller: 'tablaController',
			templateUrl: 'prueba.html',
			
		};
		var routeConfig6 = {
			controller: 'editController',
			templateUrl: 'view/editar.html',
			resolve: {
				store: function (todoStorage) {
					// Get the correct module (API or localStorage).
					return todoStorage.then(function (module) {
						module.get(); //Busca los registros de toDo
						return module;
					});
				}
			}
			
		};
		$routeProvider

			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.when('/alta', routeConfig3)
			.when('/detalles/:todo', routeConfig2)
			// .when('/prueba', routeConfig4)
			.when('/tabla/:todo',routeConfig5)
			.when('/editar/:todo',routeConfig6)
			// .otherwise({
			// 	redirectTo: '/'
			// });
	});

// myapp.config (['$locationProvider',function($locationProvider){

//     $locationProvider.hashPrefix('');

// }]);