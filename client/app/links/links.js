angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {
    // code, url, base-url, title, visits
    links: []
  };

  $scope.getLinks = function(){
    var links = Links;
    links.getLinks(function(data){
      $scope.data.links = data.data;
    })
  };

  $scope.getLinks();
});
