// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var myAppModule = angular.module('workersModule', []);

// use the myAppModule variable to
// configure the module with a controller
myAppModule.controller('MyFilterDemoCtrl', function ($scope) {
	 var someData = {
            "workers":[
            {
            "number": '1',
            "worker_no":'201501',
            "name":'chenzhengang',
            "sex":'f',
            "id_card":'4415210000000000001234',
            "address":'gd',
            "phone_number":'13888888881',
            "post":'manager1'},
            {
            "number": '2',
            "worker_no":'201502',
            "name":'bcd',
            "sex":'f',
            "id_card":'4415210000000000001235',
            "address":'gd',
            "phone_number":'13888888882',
            "post":'manager'},
            {
            "number": '3',
            "worker_no":'201503',
            "name":'abc',
            "sex":'m',
            "id_card":'4415210000000000001236',
            "address":'gd',
            "phone_number":'13888888883',
            "post":'woker'}
            ]
        };
        $scope.data = someData;
       // controller code would go here
    }
);

// use the myAppModule variable to
// configure the module with a filter
myAppModule.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; });
