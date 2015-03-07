angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {links:['cat','adf',23]};
  $scope.getLinks = function(){
    Links.getLink()
      .success(function(resp){
        $scope.data.links = resp;
      })
      .error(function(err){console.log(err)})
  };

  $scope.getLinks();

});
