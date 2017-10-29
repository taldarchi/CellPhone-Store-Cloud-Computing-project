//Project service used for projects REST endpoint
angular.module('webEx').factory("restClient", ['$http','$q',
    function ($http, $q) {

        var getDevices = function(){
          return $http.get('/devices')
        };

        var getProtocols = function(){
            return $http.get('/protocols')
        };

        var getTimes = function() {
            return $http.get('/times')
        };

        var getSelectedDevices = function(groups){
            var devices = [];
            for (var i = 0; i < groups.length; i++){
                var group = groups[i];
                for (var z = 0; z < group.devices.length; z++){
                    if (group.devices[z].selected) devices.push(group.devices[z].name);
                }
            }
            return devices;
        };


        var addBasket  = function(groups){
            return $http.post('/basket',{data:{devices:getSelectedDevices(groups)}});
        };
        var getBasket = function(){
            return $http.get('/basket');
        };
        var submitDevices = function(groups){

            return $http.post('/devices',{data:{devices:getSelectedDevices(groups)}});
            //return $http.get('/devices' + '?' + )
        };


        return {
            getDevices: getDevices,
            submitDevices: submitDevices,
            addBasket: addBasket,
            getBasket: getBasket
        };
    }
]);