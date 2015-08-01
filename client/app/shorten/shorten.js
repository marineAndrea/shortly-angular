angular.module('shortly.shorten', [])

.controller('ShortenController', function (Auth, $scope, $location, Links) {
  $scope.link = {};
  

  $scope.addLink = function(link){
    console.log('adding link');
    if(!Auth.isAuth()){
      console.log('user not authentified');
      console.log($location);
      $location.$$url = '/signin';
      console.log('new loc', $location);
    }
    Links.linkRequest(link);
    $scope.newUrl = '';
  };



});
