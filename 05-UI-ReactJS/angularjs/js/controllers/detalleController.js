'use strict';
angular.module('todomvc')
	.controller('detalleController', function detalleController($scope, $routeParams) {
		
		 console.log($routeParams.todo);
		 console.log(JSON.parse($routeParams.todo));
		 let objeto = JSON.parse($routeParams.todo);

		  // let todos = $scope.todos = store.todos;
		  //  let array = store.todos;
		  //  console.log(array);
		  //  console.log(todos);	
		   $scope.nombre  = objeto.nombre;
		   $scope.autor = objeto.autor;
		   $scope.fecha = objeto.fecha;
		   $scope.desc = objeto.desc;
		   $scope.importance = objeto.importance;
		  //  $scope.autor  = todos[$routeParams.todo].autor;
		  // console.log($scope.nombre);
		  //  console.log($scope.autor);  
			
		});

//  angular.module ('todomvc',["LocalStorageModule"]);
// 	detalleController.controller('detalleController', ['$scope', 'localStorageService','$routeParams', function($scope, localStorageService,$routeParams){
// 		let array ;
// 		if(localStorageService.get("todo")){
//     		//$scope.todo = localStorageService.get("todo");
//     		 array = localStorageService.get("todo");	
//    		 }
//    		 else{
//     	array =[];
// 		}
// 		console.log(array);

// }]);

