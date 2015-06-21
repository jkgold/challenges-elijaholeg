angular.module("gitHubCards", [])
.controller("cardController", function($scope, $http){
  $http.get("http://points.agilelabs.com/visylvius.json")
  .success(function(data){
    console.log(data.name);
    $scope.hubInfo = [data];
  })
  .error(function(error){
    console.log(error.message);
  });
});
