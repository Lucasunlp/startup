angular.module('todomvc')
	.controller('TodoCtrl', function TodoCtrl($scope, $routeParams, $filter, store) {
		'use strict';

		
		// $scope.nombre = todos[$routeParams.todo].nombre;
		// console.log($scope);
		var todos = $scope.todos = store.todos; //Almaceno todos los elementos en todos
		$scope.newTodo = '';
		$scope.editedTodo = null;


		// CON ESTA FUNCIÓN LLEVO LA CUENTA DE LOS ELEMENTOS TOTALES DE LA LISTA
		$scope.$watch('todos', function () {
			$scope.remainingCount = $filter('filter')(todos, { completed: false }).length;
			$scope.completedCount = todos.length - $scope.remainingCount;
			$scope.allChecked = !$scope.remainingCount;
		}, true);

		//SIRVE PARA EL FILTRO POR ESTADO
		$scope.$on('$routeChangeSuccess', function () {
			var status = $scope.status = $routeParams.status || '';
			$scope.statusFilter = (status === 'active') ?
				{ completed: false } : (status === 'completed') ?
				{ completed: true } : {};
		});
		
		$scope.addTodo = function () {
			
			let fecha = new Date();
			let status = "active"; //Por default las creo  activos
			let importance = "minima"; //Por default las creo con importancia minima
			let newTodo = {

				autor: $scope.newTodo.autor.trim(),
				nombre: $scope.newTodo.nombre.trim(),
				fecha:fecha,
				status,
				importance:importance,
				desc : $scope.newTodo.desc.trim(),
				completed: false
			};
			
			if (!newTodo.autor) {
				return;
			}
			
			if (!newTodo.nombre) {
				return;
			}

			$scope.saving = true;
			store.insert(newTodo)
				.then(function success() {
					$scope.newTodo = '';
				})
				.finally(function () {
					$scope.saving = false;
				});
		 
		};
		

		$scope.removeTodo = function (todo) {
			var r = confirm ("¿Estas seguro que queres eliminar el elemento?");
			if (r == true){

				store.delete(todo);
				alert("Elemento eliminado")
			}
			else {
				alert ("Fue cancelado");
			}	
		};

		

		$scope.saveTodo = function (todo) {
			store.put(todo);
		};

		$scope.toggleCompleted = function (todo, completed) {
			if (angular.isDefined(completed)) {
				todo.completed = completed;
			}
			store.put(todo, todos.indexOf(todo))
				.then(function success() {}, function error() {
					todo.completed = !todo.completed;
				});
		};

		$scope.clearCompletedTodos = function () {
			store.clearCompleted();
		};

		$scope.markAll = function (completed) {
			todos.forEach(function (todo) {
				if (todo.completed !== completed) {
					$scope.toggleCompleted(todo, completed);
				}
			});
		};
	});
