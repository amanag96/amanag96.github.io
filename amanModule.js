var amanswebsite = angular.module('amanswebsite', ['ui.router']);

amanswebsite.config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        .state('landing', {
            url: '/landing',
            templateUrl: 'html/landing-partial.html'
        })

        .state('school', {
            url: '/school',
            templateUrl: 'html/school-partial.html'
        })

        .state('projects', {
            url: '/projects',
            templateUrl: 'html/project-partial.html'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'html/contact-partial.html'
        })

        .state('more', {
            url: '/more',
            templateUrl: 'html/more-partial.html'
            // could have nested views here for each stat?
            // OR could have just one html page
        })

    $urlRouterProvider.otherwise('/landing');

});