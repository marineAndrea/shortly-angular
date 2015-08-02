angular.module('shortly.shorten', [])

.controller('ShortenController', function (Auth, $scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(link){
    // if(FormValidation.ValidUrl(link)){
      Links.linkRequest($scope.link);
      $scope.link = '';
    // }else{
      // $scope.link.validation = 'That is not a valid url';
    // }
  };

  $scope.checkAuth = function(){
    if(!Auth.isAuth()){
      $location.path('/signin');
    }
  }

  $scope.checkAuth();
});
