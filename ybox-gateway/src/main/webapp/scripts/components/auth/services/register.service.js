'use strict';

angular.module('gatewayApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


