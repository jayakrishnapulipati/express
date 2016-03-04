app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
     when('/home', {
            templateUrl: 'index.html',
            controller: 'homeCtrl'
          }).
      when('/createAccount', {
        templateUrl: 'app/createAccount/createAccount.html',
        controller: 'createAccountCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);