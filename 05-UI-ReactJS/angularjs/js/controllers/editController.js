
//,["LocalStorageModule"] al agregarlo para usar el local se rompe y no me tira error
angular.module('todomvc')
     //localStorageService lo pasé por parametro pero se rompe
     // con store me tira lo siguiente :  Unknown provider: storeProvider <- store <- editController
	.controller('editController', function editController($scope, $routeParams) {
		'use strict';
		
		
		 // console.log(JSON.parse($routeParams.todo));
		 let objeto = JSON.parse($routeParams.todo);
		 // console.log(objeto.nombre);
		  // let todos = $scope.todos = store.todos;
		  //  let array = store.todos;
		  //  console.log(array);
		  //  console.log(todos);	
		  
			$scope.editTodo = function (todo) {
			//console.log($scope.newTodo.nombre); //Recibo el dato del formulario
			
			let nameNew = $scope.newTodo.nombre;
			//console.log($routeParams.todo); //Aca recibo el objeto viejo
			$routeParams.todo = [
     				 {nombre: nameNew}
           ];
          	$routeParams.todo.nombre = nameNew;
          	
          console.log($routeParams.todo);
		// 	 objeto.nombre  = "blanco";
		 	}

		 	$scope.addAct = function(todo){
				let list  = localStorageService.get('localStorageService');
				list.push(todo);
				localStorageService.set("localStorageService",list);
				// $scope.todo.push($scope.newAct);
				// $scope.newAct = {};
				// localStorageService.set("localStorageService",$scope.todo);
			}

		// 	//FALTA AGREGAR POR IMPORTANCIA POR DEFAULT IGUAL QUE FECHA, ESTADO NO
		// 	let fecha = new Date();
		// 	let status = "active";
		// 	let importance = "minima";
		// 	let autor = "lala";
		// 	let desc = "nada";
		// 	let newTodo = {

		// 		autor: autor,
		// 		nombre: objeto.nombre,
		// 		fecha:fecha,
		// 		status,
		// 		importance:importance,
		// 		desc : desc,
		// 		completed: false
		// 	};
			
		// 	if (!newTodo.autor) {
		// 		return;
		// 	}
			
		// 	if (!newTodo.nombre) {
		// 		return;
		// 	}

		// 	$scope.saving = true;
		// 	store.insert(newTodo)
		// 		.then(function success() {
		// 			$scope.newTodo = '';
		// 		})
		// 		.finally(function () {
		// 			$scope.saving = false;
		// 		});
		// };
		 
		});
	