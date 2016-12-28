homeModule.controller("homeViewModel", function ($scope, homeService, $http, $q, $route,$routeParams, $window, $location, viewModelHelper, $timeout) {

    $scope.viewModelHelper = viewModelHelper;
    $scope.homeService = homeService;

    var initialize = function () {
        $scope.files = "";
        $scope.selectedPet = "";
        $scope.getPets();

        var dropzone = document.getElementById('dropzone');

        dropzone.ondrop = function (e) {
            e.preventDefault();
            this.className = 'dropzone';
            console.log(e.dataTransfer.files);
            $scope.appendFiles(e.dataTransfer.files);
        };

        attachment.onchange = function (e) {
            console.log(attachment.files);
            $scope.appendFiles(attachment.files);
        }
    }
    
    $scope.appendFiles = function (file) {
        $('#div-files p').remove();
        for (var x = 0, y = file.length; x < y; x++) {
            $('#div-files').append('<p>Filename: ' + file[x].name + '</p>');
            fileArr[x] = file[x].name;
        }
    }

    $scope.getPets = function () {
        fileArr = {};
        $('#div-files p').remove();

        $.get('api/pet', function (data) {
            console.log(data);
            $scope.pets = data;
            $scope.selectedPet = data[0];
        });
    }
    
    $scope.submit = function () {
        var obj = [];
        var objArr = {};
        
        if (fileArr[0] == undefined) {
            alert("Please choose a file");
        } else {
            objArr.pet = $scope.selectedPet;

            objArr.files = fileArr;
            console.log(fileArr);
            console.log(objArr);

            obj[0] = objArr;
            alert(JSON.stringify(obj));

            $scope.getPets();
        }
    }

    initialize();
});
