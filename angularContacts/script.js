angular.module("contacts", [])
	.controller("contactController", function($scope) {
		$scope.contactsList = [{
			Name: "Elijah Olegnowicz",
			PhoneNumber: "4348821135",
			Email: "ejoleg@gmail.com"
		},
  {
    Name: "Apple Longbottom",
    PhoneNumber: "123456789",
    Email: "ejoleg@gmail.com"
  },
{
  Name: "John james",
  PhoneNumber: "4348821135",
  Email: "ejoleg@gmail.com"
}];
		$scope.allHeaders = Object.keys($scope.contactsList[0]);
		$scope.predicate = 'age';
		$scope.reverse = true;
		$scope.submitContact = function() {
			$scope.contactsList.push({
				Name: $scope.name1 + " " + $scope.name2,
				PhoneNumber: $scope.phone,
				Email: $scope.email
			});
		};
		$scope.order = function(predicate) {
      console.log(predicate);
			$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
			$scope.predicate = predicate;
		};
    $scope.deleteContact = function(index){
      $scope.contactsList.splice(index, 1);
    };
	});
