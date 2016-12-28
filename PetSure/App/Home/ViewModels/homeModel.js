homeModule.controller("homeViewModel", function ($scope, homeService, $http, $q, $route,$routeParams, $window, $location, viewModelHelper, $timeout) {

    $scope.viewModelHelper = viewModelHelper;
    $scope.homeService = homeService;

    var initialize = function () {
        $scope.files = "";
        $scope.selectedPet = "";
        $scope.getPets();

    }
    
    $scope.getPets = function () {
        $.get('api/pet', function (data) {
            console.log(data);
            $scope.pets = data;
            $scope.selectedPet = data[0];
        });
    }
    
    initialize();
});
