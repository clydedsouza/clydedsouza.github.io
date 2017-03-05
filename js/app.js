/*!
 * Author: Clyde D'Souza
 * Email: clydedsouza@outlook.com
 * https://github.com/clydedz
 */

angular
.module('clyde', ['ngMaterial', 'ngRoute', 'ngAnimate'])
.config(['$routeProvider', '$mdThemingProvider', '$compileProvider', function ($routeProvider, $mdThemingProvider, $compileProvider) {
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
    $compileProvider.debugInfoEnabled(false);
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
        if (x == "about") {
            $window.location = "#/";
            setTimeout(loadAbout, 750);
        }
        else {
            $window.location = "#/projects";
            setTimeout(loadProjects, 500);
        }
    };
    $scope.onSwipeLeft = function (ev) {
        if(ev=="about"){
            $window.location = "#/projects";
            setTimeout(loadProjects,500);
        }
    };
    $scope.onSwipeRight = function (ev) {
        if (ev == "projects") {
            $window.location = "#/";
            setTimeout(loadAbout, 1000);
        }
    };
    $scope.share = function (x) {
        if (x == "tweet") {
            $window.open("https://twitter.com/share?text=Amazing%20website!%20Have%20a%20look%20at%20@ClydeDz%20's%20website%20at%20&url=http://clydedsouza.net", "_blank");
        }
        else if (x == "fb") {
            $window.open("http://www.facebook.com/sharer.php?t=Amazing%20stuff&u=http://clydedsouza.net", "_blank");
        }
        else if (x == "google") {
            $window.open("https://plus.google.com/share?text=Amazing%20stuff&url=http://clydedsouza.net", "_blank");
        }
        else {
            $window.open("https://www.linkedin.com/cws/share?url=clydedsouza.net&original_referer=http%3A%2F%clydedsouza.net", "_blank");
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
                $window.location = "" + response.data.LongUrl;
                $scope.urlFlag = true;
            }
            else {
                $scope.urlFlag = false;
            }
        },
        function (error) {
            $scope.urlFlag = false;
        });
}]);

/* 
 * Some basic JS 
 */

function loadBody() {
    ///<summary>Fades in body contents including the pages</summary>
    document.getElementsByClassName('website-body')[0].style.opacity = 1;
    setTimeout(loadAbout, 150);
    setTimeout(loadProjects, 150);
}

function loadAbout() {
    ///<summary>Fades in about contents after showing a loading sign</summary>
    setTimeout(function () {
        document.getElementById('aboutLoading').style.display = 'none';
        document.getElementById('aboutPage').style.opacity = 1
    }, 150);
}

function loadProjects() {
    ///<summary>Fades in projects contents after showing a loading sign</summary>
    setTimeout(function () {
        document.getElementById('projectsLoading').style.display = 'none';
        document.getElementById('projectsPage').style.opacity = 1
    }, 150);
}