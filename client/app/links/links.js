angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, Auth, Links) {
  $scope.data = {
    links: []
  };


  $scope.linksDisplay = function(){
    if(!Auth.isAuth()){
      $location.path('/signin');
    }
    Links.getLinks(function(data){
      $scope.data.links = data.data;
    });
  };

  $scope.linksDisplay();
});
