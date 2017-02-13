		let primerCtrl = angular.module('primerCtrl',["LocalStorageModule"]); 
		primerCtrl.controller('primerController',function($scope,localStorageService) {
		
		
			
			$scope.todo =[];
			$scope.todo = localStorageService.get("localStorageService");

			

			//console.log(localStorageService.keys());
			$scope.remove = function() {
				var oldList = $scope.todo;
				$scope.todo = [localStorageService.get("localStorageService")];
				angular.forEach(oldList, function(x) {
					if (!x.newAct) $scope.todo.push(x);
				});
				};

			

			$scope.addAct = function(){
				$scope.todo.push($scope.newAct);
				$scope.newAct =  {};
				localStorageService.set("localStorageService",$scope.todo);
			


			}


	});








