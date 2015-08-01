angular.module('shortly.shorten', [])

.controller('ShortenController', function (Auth, $scope, $location, Links) {
  $scope.link = {};
  

  $scope.addLink = function(link){
    Links.linkRequest(link);
    $scope.newUrl = '';
  };

  $scope.checkAuth = function(){
    if(!Auth.isAuth()){
      $location.path('/signin');
    }
  }

  $scope.checkAuth();
});
