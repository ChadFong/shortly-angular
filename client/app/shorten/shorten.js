angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(){
    Links.postLink($scope.link)
      .success(function(data){console.log(data);})
      .error (function(err){console.error(err);})
  };

});
