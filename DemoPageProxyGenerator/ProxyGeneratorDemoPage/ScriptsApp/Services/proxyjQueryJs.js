//Warning this file was dynamicly created.
//Please don't change any code it will be overwritten next time the template is executed.
//Created on 18.02.2016 time 22:10 from SquadWuschel.

  window.proxyjQueryJs = function() { } 


proxyjQueryJs.prototype.#ControllProxyFileerFunctionName# = function (person) { 
   return jQuery.post('Proxy/AddJsEntryOnly',person).then(function (result) {
        return result;
   });
}

proxyjQueryJs.prototype.#ControllProxyFileerFunctionName# = function (person,name) { 
   return jQuery.post('Proxy/AddJsEntryAndName'+ '?name='+encodeURIComponent(name),person).then(function (result) {
        return result;
   });
}

proxyjQueryJs.prototype.#ControllProxyFileerFunctionName# = function (person,name,vorname) { 
   return jQuery.post('Proxy/AddJsEntryAndParams'+ '?name='+encodeURIComponent(name)+'&vorname='+encodeURIComponent(vorname),person).then(function (result) {
        return result;
   });
}

proxyjQueryJs.prototype.#ControllProxyFileerFunctionName# = function () { 
   return jQuery.get('Proxy/ClearJsCall').then(function (result) {
        return result;
   });
}

proxyjQueryJs.prototype.#ControllProxyFileerFunctionName# = function (id) { 
   return jQuery.get('Proxy/LoadJsCallById' + '/' + id).then(function (result) {
        return result;
   });
}

proxyjQueryJs.prototype.#ControllProxyFileerFunctionName# = function (name,vorname,alter) { 
   return jQuery.get('Proxy/LoadJsCallByParams'+ '?name='+encodeURIComponent(name)+'&vorname='+encodeURIComponent(vorname)+'&alter='+alter).then(function (result) {
        return result;
   });
}

proxyjQueryJs.prototype.#ControllProxyFileerFunctionName# = function (name,vorname,alter,id) { 
   return jQuery.get('Proxy/LoadJsCallByParamsAndId' + '/' + id+ '?name='+encodeURIComponent(name)+'&vorname='+encodeURIComponent(vorname)+'&alter='+alter).then(function (result) {
        return result;
   });
}

proxyjQueryJs.prototype.#ControllProxyFileerFunctionName# = function (name,vorname,alter,access) { 
   return jQuery.get('Proxy/LoadJsCallByParamsWithEnum'+ '?name='+encodeURIComponent(name)+'&vorname='+encodeURIComponent(vorname)+'&alter='+alter+'&access='+access).then(function (result) {
        return result;
   });
}



