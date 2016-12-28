var homeModule = angular.module('home', ['common'])
    .config(function ($routeProvider, $locationProvider) {
        var _root = getRoot();
        $routeProvider.when(_root + 'Home', { templateUrl: _root + 'App/Home/Views/home.html', controller: 'homeViewModel' });
        $routeProvider.otherwise({ redirectTo: _root + 'Home' });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });


homeModule.factory('homeService', function ($rootScope, $http, $q, $location, viewModelHelper) { return MyApp.homeService($rootScope, $http, $q, $location, viewModelHelper); });

(function (myApp) {
    var homeService = function ($rootScope, $http, $q, $location, viewModelHelper) {

        var self = this;
         
        return this;
    };
    myApp.homeService = homeService;
}(window.MyApp));
