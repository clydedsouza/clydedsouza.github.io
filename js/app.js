/*
 * Author: Clyde D'Souza
 * Email: clydedsouza@outlook.com
**/

angular
.module('clyde', ['ngMaterial', 'ngRoute', 'ngAnimate'])
.config(['$routeProvider', '$mdThemingProvider', function ($routeProvider, $mdThemingProvider) {
    $routeProvider
        .when('/', { templateUrl: "views/about.html", controller:"AboutController", title:"Clyde D'Souza - A Passionate Front End Developer", tabIndex:0 })
        .when('/projects', { templateUrl: "views/projects.html", controller: "ProjectsController", title: "Projects | Clyde D'Souza - A Passionate Front End Developer", tabIndex: 1 })
        .when('/about', { redirectTo: "/" })
        //.when('/u/:URL', { templateUrl: "views/url.html", controller: "UrlController", title: "Url Mapping | Clyde D'Souza - A Passionate Front End Developer", tabIndex: 2 })
        .when('/:URL', { templateUrl: "views/url.html", controller: "UrlController", title: "Url Mapping | Clyde D'Souza - A Passionate Front End Developer", tabIndex: -1 })
        .otherwise({ templateUrl: "views/about.html" });
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('yellow');
}])
.run(['$location', '$rootScope', function ($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.globalConfig = {
            pageTitle: "",
            tabIndex:0
        };
        $rootScope.globalConfig.pageTitle = current.$$route.title;
        $rootScope.globalConfig.tabIndex = current.$$route.tabIndex;
    });
}])
.controller("GlobalController", ['$rootScope', function ($rootScope) {
    return $rootScope.$on('$routeChangeSuccess', (function () {
        return function (event, current, previous) {
            $rootScope.globalConfig = {
                pageTitle: "",
                tabIndex: 0
            };
            $rootScope.globalConfig.pageTitle = current.$$route.title;
            $rootScope.globalConfig.tabIndex = current.$$route.tabIndex;
            return $rootScope.globalConfig;
        };
    }));
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
    $scope.share = function (x) {
        if (x == "tweet") {
            $window.open("https://twitter.com/share?text=Amazing%20website!%20Have%20a%20look%20at%20@ClydeDz%20's%20website%20at%20&url=http://www.clyde.nz", "_blank");
        }
        else if (x == "fb") {
            $window.open("http://www.facebook.com/sharer.php?t=Amazing%20stuff&u=http://www.clyde.nz", "_blank");
        }
        else if (x == "google") {
            $window.open("https://plus.google.com/share?text=Amazing%20stuff&url=http://www.clyde.nz", "_blank");
        }
        else {
            $window.open("https://www.linkedin.com/cws/share?url=clydedsouza.github.io&original_referer=http%3A%2F%2www.clyde.nz", "_blank");
        }
    };
    $scope.topDirections = ['left', 'up'];
    $scope.bottomDirections = ['down', 'right'];
    $scope.isOpen = false;
    $scope.availableModes = ['md-fling', 'md-scale'];
    $scope.selectedMode = 'md-fling';
    $scope.availableDirections = ['up', 'down', 'left', 'right'];
    $scope.selectedDirection = 'up';
}])
.controller('AboutController', ['$scope', function ($scope) {
}])
.controller('ProjectsController', ['$scope', '$http', function ($scope, $http) {
    $scope.projects = {};
    //https://raw.githubusercontent.com/ngClyde/ngClyde.github.io/master/js/projects.json
    $http.get("../api/projects.json")
        .then(function (response) {
            $scope.projects = response.data;
        },
        function (error) {
        });
}])
.controller('UrlController', ['$scope', '$http', '$routeParams','$window', function ($scope, $http, $routeParams, $window) {
    $scope.urlName = $routeParams.URL;
    $scope.urlFlag = true;
    $http.get("http://clydenzapi.azurewebsites.net/api/UrlMappings?shorturl="+$scope.urlName)
        .then(function (response) {
            if (response.data != null && response.data.LongUrl != null) {
                console.log(response.data != null && response.data.LongUrl != null);
                console.log(response.data.LongUrl == null);
                //$window.location = "" + response.data.LongUrl;
                $scope.urlFlag = true;
            }
            else {
                console.log("f "+response.data != null && response.data.LongUrl != null);
                $scope.urlFlag = false;
            }
        },
        function (error) {
            $scope.urlFlag = false;
        });
}]);