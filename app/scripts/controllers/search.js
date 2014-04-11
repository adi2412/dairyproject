'use strict';

angular.module('dairyprojectApp')
	.controller('SearchCtrl', function($scope, $http){
		$scope.data = {};
		$scope.sheets = [{
			'title': 'Milk Producers',
			'href': 'http://localhost:9000/milkman'
		},{
			'title': 'Villages',
			'href': 'http://localhost:9000/villages'
		},{
			'title': 'Banks',
			'href': 'http://localhost:9000/banks'
		},{
			'title': 'Doctors',
			'href': 'http://localhost:9000/doctors'
		},{
			'title': 'Feed Suppliers',
			'href': 'http://localhost:9000/suppliers'
		},{
			// {'title': 'Medicine Shop'},
			// {'title': 'NGOs'},
			// {'title': 'Research Institute Organisations'},
			'title': 'NGOs',
			'href': 'http://localhost:9000/ngo'
		}];

		$scope.active = 'Milk Producers';
		$http.get($scope.sheets[0].href).success(function(milkmen) {
			$scope.data = milkmen;
			$scope.dataTabs = Object.keys(milkmen[0]);
			$scope.dataTabs.splice(0,1); // To remove the _id property.
		});

		$scope.isActive = function(title){
			return title === $scope.active;
		};

		$scope.makeActive = function(tab){
			$scope.active = tab.title;
			$scope.data = {};
			$scope.dataTabs = {};
			$http.get(tab.href).success(function(content){
				$scope.data = content;
				$scope.dataTabs = Object.keys(content[0]);
				$scope.dataTabs.splice(0,1);
			});
		};
	});