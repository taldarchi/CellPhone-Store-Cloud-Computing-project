ex.directive('widget1', function (restClient, appGlobal,$rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/widget1.html',
        scope: {},
        link: function (scope, element, attrs) {

            restClient.getDevices()
            .then(function(data){
                console.log(data.data);
                appGlobal.get.devices = data.data;
                scope.deviceGroups = appGlobal.get.devices;
            })
            .catch(function(err){
                alert(err);
            });

            $rootScope.$on('clear', function(){
                for (var i =0 ;i < scope.deviceGroups.length; i++){
                    var group = scope.deviceGroups[i];
                    for (var z = 0; z < group.devices.length; z++){
                        group.devices[z].selected = false;
                    }

                }
            });

            scope.selectDevice = function(groupIndex,deviceIndex){
                var group = scope.deviceGroups[groupIndex];
                var groupDevicesLength = group.devices.length;
                var numberedOfSelected = 0;
                for (var z = 0; z < group.devices.length; z++){
                    if (group.devices[z].selected) numberedOfSelected++;
                }
                if (numberedOfSelected === groupDevicesLength){
                    group.selected = true;
                }
            };

            scope.selectGroup = function(index){
                var group = scope.deviceGroups[index];
                for (var i = 0; i < group.devices.length; i++ ) {
                    if (group.devices[i].selected === undefined){
                        group.devices[i].selected = true;
                    }else{
                        group.devices[i].selected = !group.devices[i].selected;
                    }

                }
            };
        }
    };
});