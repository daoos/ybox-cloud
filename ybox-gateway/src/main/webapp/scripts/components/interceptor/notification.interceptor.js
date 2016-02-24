 'use strict';

angular.module('gatewayApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-gatewayApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-gatewayApp-params')});
                }
                return response;
            }
        };
    });
