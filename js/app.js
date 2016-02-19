angular
.module('clyde', ['ngMaterial', 'ngRoute', 'ngAnimate'])
.config(['$routeProvider', '$mdThemingProvider', function ($routeProvider, $mdThemingProvider) {
    $routeProvider
        .when('/', { templateUrl: "views/bout.html", controller:"AboutController", title:"Clyde D'Souza", tabIndex:0 })
        .when('/projects', { templateUrl: "views/projects.html", controller: "ProjectsController", title: "Projects | Clyde D'Souza", tabIndex:1 })
        .otherwise({ templateUrl: "views/not-found.html" });
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
.controller('IndexController', ['$scope', '$window', '$rootScope', function ($scope, $window, $rootScope) {
    $scope.localTabIndex = $rootScope.tabIndex;
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
            $window.open("https://twitter.com/share?text=Amazing%20website!%20Have%20a%20look%20at%20@ClydeDz%20's%20website%20at%20&url=http://clydedsouza.github.io", "_blank");
        }
        else if (x == "fb") {
            $window.open("http://www.facebook.com/sharer.php?u=http://clydedsouza.github.io", "_blank");
        }
        else if (x == "google") {
            $window.open("https://plus.google.com/share?url=http://clydedsouza.github.io", "_blank");
        }
        else {
            $window.open("http://www.linkedin.com/shareArticle?mini=true&amp;url=http://clydedsouza.github.io", "_blank");
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
.controller('AboutController', ['$scope', '$rootScope', function ($scope, $rootScope) {
}])
.controller('ProjectsController', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
    $scope.projects = {};
    //https://raw.githubusercontent.com/ngClyde/ngClyde.github.io/master/js/projects.json
    $http.get("../api/projects.json")
        .then(function (response) {
            $scope.projects = response.data;
        },
        function (error) {
        });
}]);