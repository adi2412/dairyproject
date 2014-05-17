'use strict';

angular.module('dairyprojectApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'सूची',
      'link': '/'
    }, {
      'title': 'सूचना',
      'link': '/search'
    }, {
      'title': 'संपर्क',
      'link': '/contact'
    }];
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
