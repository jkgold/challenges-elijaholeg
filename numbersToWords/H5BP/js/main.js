angular.module("wordify", [])
.controller("wordifyController", function($scope){
  $scope.words = [
    {text: "word1"},
    {text: "word2"},
    {text: "word3"},
    {text: "word4"},
    {text: "word5"}
  ];
  $scope.wordify = function (){
    $scope.words.push({text: $scope.numberput});
  };
  $scope.isValid = function(){
    if(typeof $scope.numberput === 'number'){
    $scope.invalidInput = false;
  }else{
    $scope.invalidInput = true;
  }
  };
});
    // var numbers = {
    //   "1":["a", "b", "c"],
    //   "2":["d", "e", "f"],
    //   "3":["g", "h", "i"],
    //   "4":["j", "k", "l"],
    //   "5":["m", "n", "o"],
    //   "6":["p", "q", "r"],
    //   "7":["s", "t", "u"],
    //   "8":["v", "w"],
    //   "9":["x", "y"],
    //   "0":["z"]
    // };
