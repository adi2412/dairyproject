'use strict';

angular.module('dairyprojectApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
