var myapp = angular.module('phonemyapp',['ngRoute','ngResource']);



myapp.service('newservice',function(){
    this.selected="default";   
    
});

myapp.controller('myfirstctrl'['$scope','$filter','newservice','$routeParams','$resource',function($scope,$filter,newservice,$routeParams,$resource){
                              
      $scope.id = $routeParams.id || '2';
      $scope.$watch('selected', function() {
       newservice.selected = $scope.selected; 
     });
      //  $scope.titlename = newservice.titlename;
    
      $scope.$watch('name', function() {
       newservice.name = $scope.name; 
      });      
    
      $scope.phones = [

{"name":"Nexus","snippets":"1The Next, Next Generation Experience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb).","images":"images/dell-streak-7.0.jpg","id":"1"},
{"name":"Apple","snippets":"12The Next, Next Generation Experience the future with MOTOROLA  XOOM,","images":"images/droid-pro-by-motorola.0.jpg","id":"2"},
    {"name":"Dell Avenvue","snippets":"13 he Next, Next Generation Experience the future with Motorola","images":"images/motorola-atrix-4g.3.jpg","id":"3"},
{"name":"MOTOROLA XOOM","snippets":"12mortorol2","images":"images/dell-streak-7.0.jpg","id":"4"},
    {"name":"Nexus version 2","snippets":"0Working nexus0","images":"images/dell-streak-7.0.jpg","id":"5"},
{"name":"MOTOROLA ATRIX","snippets":"12mortorol2","images":"images/dell-streak-7.0.jpg","id":"6"},
    {"name":"Nexus","snippets":"0Working nexus0","images":"images/droid-pro-by-motorola.0.jpg","id":"7"},
{"name":"Dell Streak 7","snippets":"12mortorol2","images":"images/dell-streak-7.0.jpg","id":"8"},
    {"name":"Nexgen phone","snippets":"0Working nexus0","images":"images/dell-streak-7.0.jpg","id":"9"},
{"name":"Apple iphone","snippets":"12mortorol2","images":"images/dell-streak-7.0.jpg","id":"10"}
]
$scope.sortorder = [

{"sort":"Alphabet"},
{"sort":"Number"}
]

$scope.onChanged = function() {
        if($scope.selected.sort == 'Alphabet') {
             
             $scope.phones = $filter('orderBy')($scope.phones, 'name');
        
        }
    if($scope.selected.sort == 'Number') {
             
             $scope.phones = $filter('orderBy')($scope.phones, 'snippets');
        
        }
    }
  
}]);


myapp.controller('forecastController', ['$scope','$filter','newservice','$routeParams','$resource','$http',function($scope,$filter,newservice,$routeParams,$resource,$http){
  
     $scope.id = $routeParams.id || '2';
    console.log($scope.id);
    
$http.get("phone.json", {
    params: { user_id: $scope.id }
}).then(function(response) {
    console.log(response);
     $scope.myData = response.data;
    console.log($scope.myData);
}, function(x) {
    // Request error
});
    

  /* $scope.selected = newservice.selected;
    
    $scope.$watch('selected', function() {
       newservice.selected = $scope.selected; 
    });
          
    $scope.name = newservice.name;
    
    $scope.$watch('name', function() {
       newservice.name = $scope.name; 
    });
    console.log(newservice.name);*/

}]);