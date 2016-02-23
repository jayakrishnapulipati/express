
/**
 * Created by PRASAD on 20-Feb-16.
 */
var app = angular.module('app',[]);
app.controller('createController',function($scope,$http){
    $scope.user = {};
   $scope.submit = function(){
       alert("success");
       $http.post('http://localhost:3000/create/account',$scope.user).success(function(response){
           $scope.reponse = response;
           console.log($scope.reponse);
       });
   };
    $http.get('http://localhost:3000/create/account').success(function(response){
        $scope.reponse = response;
        console.log($scope.reponse);
    });
});