
angular.module('webEx').factory("appGlobal", [
    function () {
        var data = {
            get: {
                devices:{},
                protocols:{},
                times:{}
            }
        };
        return data;
    }
]);