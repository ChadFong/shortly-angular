angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getLink()
      .success(function(resp){
        $scope.data.links = resp;
        console.log(resp);
      })
      .error(function(err){
        console.error(err);
      })
  };

  $scope.clickLink = function(){
    var that = this;
    that.link.visits++;
    Links.postLink(that.link)
      .success(function(data){console.log(data);})
      .error(function(err){console.log(err);})
  };

  $scope.getLinks();

});
