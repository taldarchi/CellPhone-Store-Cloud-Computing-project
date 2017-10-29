ex.directive('widget4', function (restClient, appGlobal,$rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/widget4.html',
        scope: {},
        link: function (scope, element, attrs) {
            scope.groups = appGlobal.get.devices;

            scope.clear = function(){
                $rootScope.$broadcast('clear');
            };

            scope.submit = function(){
                restClient.submitDevices(scope.groups,scope.protocols, scope.times )
                .then(function(data){
                    alert('Submitted');
                }).catch(function(err){
                    alert('There was a problem with your submission');
                })
            };
            scope.getbasket = function(){
                restClient.getBasket( )
                .then(function(data){
                    var devices  = JSON.parse(data.data);
                    $rootScope.$broadcast('show',{devices:devices});
                }).catch(function(err){

                })
            };
            scope.addbasket = function() {
                restClient.addBasket(scope.groups )
                .then(function(data){
                    alert('Submitted');
                }).catch(function(err){
                    alert('There was a problem with your submission');
                })
            };

            scope.groups = appGlobal.get.devices;

            scope.$watch(function () { return appGlobal.get.devices }, function (newVal, oldVal) {
                if (typeof newVal !== 'undefined') {
                    scope.groups = appGlobal.get.devices;
                }
            }, true);

        }
    };
});