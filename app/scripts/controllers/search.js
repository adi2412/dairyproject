'use strict';

angular.module('dairyprojectApp')
	.controller('SearchCtrl', function($scope, $http){
		$scope.data = {};
		$scope.sheets = [{
			'title': 'Milk Producers',
			'href': '/milkman'
		},{
			'title': 'Villages',
			'href': '/villages'
		},{
			'title': 'Banks',
			'href': '/banks'
		},{
			'title': 'Doctors',
			'href': '/doctors'
		},{
			'title': 'Feed Suppliers',
			'href': '/suppliers'
		},{
			// {'title': 'Medicine Shop'},
			// {'title': 'NGOs'},
			// {'title': 'Research Institute Organisations'},
			'title': 'NGOs',
			'href': '/ngo'
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