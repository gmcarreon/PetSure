homeModule.controller("rootViewModel", function ($timeout, $route, $scope, homeService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

    $scope.viewModelHelper = viewModelHelper;
    $scope.homeService = homeService;

    var initialize = function () {
        //$scope.pageHeading = "User Section";
    }

    initialize();
});
