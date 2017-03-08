﻿/*!
 * Author: Clyde D'Souza
 * Email: clydedsouza@outlook.com
 * https://github.com/clydedz
 */

var websiteCategory = {
    pageNavigation: "Page Navigation",
    pageView: "Page View",
    contact: "Contact",
    share: "Share",
    projectDetails: "Project Details",
    error: "Error",
}

var websiteEvent={
    click: "Click",
    clickProjectWebsite: "Click Website",
    clickProjectGitHub: "Click GitHub",
    viewLoad: "View Load",
    errorAPI: "Error from API",
}

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
            sendGoogleTrackingEvent(websiteCategory.pageNavigation, websiteEvent.click, 'About');
            setTimeout(loadAbout, 750);
        }
        else {
            $window.location = "#/projects";
            sendGoogleTrackingEvent(websiteCategory.pageNavigation, websiteEvent.click, 'Projects');
            setTimeout(loadProjects, 500);
        }
    };
    $scope.onSwipeLeft = function (ev) {
        if(ev=="about"){
            $window.location = "#/projects";
            sendGoogleTrackingEvent(websiteCategory.pageNavigation, websiteEvent.click, 'Projects');
            setTimeout(loadProjects,500);
        }
    };
    $scope.onSwipeRight = function (ev) {
        if (ev == "projects") {
            $window.location = "#/";
            sendGoogleTrackingEvent(websiteCategory.PageNavigation, websiteEvent.Click, 'Projects');
            setTimeout(loadAbout, 1000);
        }
    };
    $scope.share = function (x) {
        if (x == "tweet") {
            sendGoogleTrackingEvent(websiteCategory.share, websiteEvent.click, 'Share on Twitter');
            $window.open("https://twitter.com/share?text=Amazing%20website!%20Have%20a%20look%20at%20@ClydeDz%20's%20website%20at%20&url=http://clydedsouza.net", "_blank");
        }
        else if (x == "fb") {
            sendGoogleTrackingEvent(websiteCategory.share, websiteEvent.click, 'Share on Facebook');
            $window.open("http://www.facebook.com/sharer.php?t=Amazing%20stuff&u=http://clydedsouza.net", "_blank");
        }
        else if (x == "google") {
            sendGoogleTrackingEvent(websiteCategory.share, websiteEvent.click, 'Share on Google+');
            $window.open("https://plus.google.com/share?text=Amazing%20stuff&url=http://clydedsouza.net", "_blank");
        }
        else {
            sendGoogleTrackingEvent(websiteCategory.share, websiteEvent.click, 'Share on LinkedIn');
            $window.open("https://www.linkedin.com/cws/share?url=clydedsouza.net&original_referer=http%3A%2F%clydedsouza.net", "_blank");
        }
    };
    $scope.navigateProjectWebsite = function (projectTitle) {
        sendGoogleTrackingEvent(websiteCategory.projectDetails, websiteEvent.clickProjectWebsite, projectTitle);
    };
    $scope.navigateProjectGitHub = function (projectTitle) {
        sendGoogleTrackingEvent(websiteCategory.projectDetails, websiteEvent.clickProjectGitHub, projectTitle);
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
    $scope.projects = {};    //https://raw.githubusercontent.com/ngClyde/ngClyde.github.io/master/js/projects.json
    $http.get("../api/projects.json")
        .then(function (response) {
            $scope.projects = response.data;
        },
        function (error) {
            sendGoogleTrackingEvent(websiteCategory.error, websiteEvent.errorAPI, 'Project .JSON response error');
        });
}])
.controller('UrlController', ['$scope', '$http', '$routeParams','$window', function ($scope, $http, $routeParams, $window) {
    $scope.urlName = $routeParams.URL;
    $scope.urlFlag = true;
    sendGoogleTrackingEvent(websiteCategory.pageView, websiteEvent.viewLoad, 'Short URL: ' + $scope.urlName);
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
            sendGoogleTrackingEvent(websiteCategory.error, websiteEvent.errorAPI, 'Short URL service response error. URL: ' + $scope.urlName);
        });
}]);

/* 
 * Some basic JS 
 */

function loadBody() {
    ///<summary>Fades in body contents including the pages</summary>
    document.getElementsByClassName('website-body')[0].style.opacity = 1;
    if (window.location.hash == "#/projects") {
        sendGoogleTrackingEvent(websiteCategory.pageView, websiteEvent.viewLoad, 'Projects');
        setTimeout(loadProjects, 150);
    }
    else {
        sendGoogleTrackingEvent(websiteCategory.pageView, websiteEvent.viewLoad, 'About');
        setTimeout(loadAbout, 150);
    }
}

function loadAbout() {
    ///<summary>Fades in about contents after showing a loading sign</summary>
    console.log("load about");
    setTimeout(function () {
        document.getElementById('aboutLoading').style.display = 'none';
        document.getElementById('aboutPage').style.opacity = 1
    }, 150);
}

function loadProjects() {
    ///<summary>Fades in projects contents after showing a loading sign</summary>
    console.log("load projects");
    setTimeout(function () {
        document.getElementById('projectsLoading').style.display = 'none';
        document.getElementById('projectsPage').style.opacity = 1
    }, 150);
}

function sendGoogleTrackingEvent(category, action, label) {
    ga('gtm1.send', 'event', category, action, label);
}