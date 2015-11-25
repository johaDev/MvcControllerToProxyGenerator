
//Warning this file was dynamicly created.
//Please don't change any code it will be overwritten.
//Created on 25.11.2015 time 22:58 from SquadWuschel.

 function webApiProxyPSrv($http) { this.http = $http; } 


webApiProxyPSrv.prototype.get = function () { 
   return this.http.get('WebApiProxyC/Get').then(function (result) {
        return result.data;
   });
}

webApiProxyPSrv.prototype.getItem = function (id) { 
   return this.http.get('WebApiProxyC/GetItem' + '/' + id).then(function (result) {
        return result.data;
   });
}

webApiProxyPSrv.prototype.put = function (id,value) { 
   return this.http.get('WebApiProxyC/Put' + '/' + id+ '?value='+encodeURIComponent(value)).then(function (result) {
        return result.data;
   });
}

webApiProxyPSrv.prototype.delete = function (id) { 
   return this.http.get('WebApiProxyC/Delete' + '/' + id).then(function (result) {
        return result.data;
   });
}




angular.module('webApiProxyPSrv', []) .service('webApiProxyPSrv', ['$http', webApiProxyPSrv]);
