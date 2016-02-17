﻿angular
.module('clyde', ['ngMaterial', 'ngRoute', 'ngAnimate'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', { templateUrl: "views/about.html", controller:"AboutController" })
    .when('/projects', { templateUrl: "views/projects.html", controller:"ProjectsController" })
    .otherwise({ templateUrl: "views/not-found.html" });
}])
.controller('IndexController', ['$scope', '$window', function ($scope, $window) {
    $scope.goTo = function (x) {
        if(x=="about"){
            $window.location = "#/";
        }
        else {
            $window.location = "#/projects";
        }
    };
    $scope.onSwipeLeft = function (ev) {
        if(ev=="about"){
            $window.location = "#/projects";
        }
    };
    $scope.onSwipeRight = function (ev) {
        if (ev == "projects") {
            $window.location = "#/";
        }
    };
}])
.controller('AboutController', ['$scope', function ($scope) {
}])
.controller('ProjectsController', ['$scope','$http', function ($scope,$http) {
    $scope.projects = {};
    //https://raw.githubusercontent.com/ngClyde/ngClyde.github.io/master/js/projects.json
    $http.get("../api/projects.json")
        .then(function (response) {
            $scope.projects = response.data;
        },
        function (error) {
        });
}]);