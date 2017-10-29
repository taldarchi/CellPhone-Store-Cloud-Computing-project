
angular.module('webEx').controller('modalController', ['$scope', '$location', '$http', 'appGlobal', '$rootScope',
    function ($scope, $location, $http, global, $rootScope) {
        $rootScope.$on('show', function(data,events){
            $scope.devices = events.devices;
            $('#myModal').modal('toggle');
        });

    }
]);