app.controller('homeCtrl',function($scope,$location){
    $scope.loginBool = true;
    $scope.register = function(){
        $scope.loginBool = false;
        $location.path('#/createAccount');
    }
});