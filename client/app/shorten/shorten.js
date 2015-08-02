angular.module('shortly.shorten', [])

.controller('ShortenController', function (Auth, $scope, $location, Links, FormValidation) {
  $scope.link = {};
  

  $scope.addLink = function(link){
    // if(FormValidation.ValidUrl(link)){
      Links.linkRequest(link);
      $scope.newUrl = '';
      $scope.link.validation = '';
    // }else{
      // $scope.link.validation = 'That is not a valid url';
    // }
  };

  $scope.checkAuth = function(){
    if(!Auth.isAuth()){
      $location.path('/signin');
    }
  }

  
  
  // rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;


  $scope.checkAuth();
  // console.log($scope.link);
});
