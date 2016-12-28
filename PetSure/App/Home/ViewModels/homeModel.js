homeModule.controller("homeViewModel", function ($scope, homeService, $http, $q, $route,$routeParams, $window, $location, viewModelHelper, $timeout) {

    $scope.viewModelHelper = viewModelHelper;
    $scope.homeService = homeService;

    var initialize = function () {
        
    }
   
    initialize();
});
