angular.module("wordify", [])
.controller("wordifyController", function($scope, $sce){
  $scope.words = [
  ];
  $scope.wordify = function (){
    $scope.words.push({text: $scope.numberput});
  };
  // $scope.number = "";
  //
  // $scope.invalidInput = function(){
  //   return !$scope.number.match(/^[\d -]+$/);
  // };
// $scope.numCases = [
//   ['0'],
//   ['1'],
//   ['a','b','c','2'],
//   ['d','e','f','3'],
//   ['g','h','i','4'],
//   ['j','k','l','5'],
//   ['m','n','o','6'],
//   ['p','q','r','s','7'],
//   ['t','u','v','8'],
//   ['w','x','y','z','9']
// ];
//
//  $scope.perms = function(numString){
//   var currentNumCases = $scope.numCases[parseInt(numString[0])];
//   if(numString.length > 1){
//     var cases = [];
//     var remainingCases = $scope.perms(numString.slice(1));
//     currentNumCases.forEach(function(currentStr){
//       remainingCases.forEach(function(remainingStr){
//         cases.push(currentStr + remainingStr);
//       });
//     });
//     $scope.words.push(cases);
//     console.log($scope.words);
//   }else{
//     $scope.words.push(currentNumCases);
//   }
// };
// $scope.perms("23");

// samers solution--------
var PERMS = {
  allCases: {
    "0": ["0"],
    "1": ["1"],
    "2": ["a", "b", "c", "2"],
    "3": ["d", "e", "f", "3"],
    "4": ["g", "h", "i", "4"],
    "5": ["j", "k", "l", "5"],
    "6": ["m", "n", "o", "6"],
    "7": ["p", "q", "r", "s", "7"],
    "8": ["t", "u", "v", "8"],
    "9": ["w", "x", "y", "z", "9"]
  },
  expandArrays: function(a, b) {
    var result = [];
    a.forEach(function(ae) {
      b.forEach(function(be) {
        result.push(ae + be);
      });
    });
    return result;
  }
};

PERMS.calculate = function(numberString) {
  if (numberString.length === 1) {
    return PERMS.allCases[numberString];
  }
  var currentCases = PERMS.allCases[numberString[0]];
  var remainingCases = PERMS.calculate(numberString.slice(1));
  return PERMS.expandArrays(currentCases, remainingCases);
};
$scope.wordify = function(number){
  var numbStr = number.toString();
  var possibilities = PERMS.calculate(numbStr);
  possibilities.forEach(function(el){
    if(el.match(/[a-z]\d+[a-z]+/)){
    return;
  }else if(el.replace(/\d+/g, "").match(/^[a-z]?$/)){
    return;
  }else{
    $scope.words.unshift({text: el, html: $sce.trustAsHtml(el.replace(/([a-z]+)/, '<strong class="highlight">$1</strong>'))});
  }
  });

};
PERMS.numberify = function(string){
  var indices = [];
  var lettersArray = string.split("");
  lettersArray.map(function(letter){
    debugger;
    for(numb in PERMS.allCases){
      console.log(PERMS.allCases[numb].indexOf(letter));
      indices.push(PERMS.allCases[numb].indexOf(letter));
    }

  });
};
console.log(PERMS.numberify("word"));
});
