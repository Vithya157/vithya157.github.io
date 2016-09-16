// ROUTES

myapp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'myfirstctrl'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    
     .when('/forecast/:id', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    
});