$(document).ready(function() {
  var table = {}

  table.data = [{
      "name": "Elijah",
      "gender": "male",
      "job title": "Humanitarian"
    }, {
      "name": "George",
      "gender": "male",
      "job title": "Humanitarian"
    }, {
      "name": "John",
      "gender": "male",
      "job title": "Humanitarian"
    }, {
      "name": "Collin",
      "gender": "male",
      "job title": "Humanitarian"
    }, {
      "name": "Ricky",
      "gender": "male",
      "job title": "Humanitarian"
    }, {
      "name": "Jimmy",
      "gender": "male",
      "job title": "Humanitarian"
    }]
    // header"name" = data[0]

  var namesArray = [];
  var uniqueNames = [];

  var tableHeaderCreator = function(array) {
    nameArray = Object.keys(array[1])
    for (i = 0; i < nameArray.length; i++) {
      var headerClone = $(".header").clone();
      headerClone.text(nameArray[i]);
      $(".header-titles").append(headerClone)
    }
  }

  console.log(tableHeaderCreator(table.data));



  var tableCellCreator = function(array){
      debugger;
    for(i=0; i < array.length; i++){
      var object = array[i];
      var text = [];
    for (var element in object){
        word = object[element];
        text.push(word)
        var clone = $(".data-input").clone().append(text)
      $(".data-info").append(clone);
      text = [];
      }
    }
  }

  console.log(tableCellCreator(table.data));


});
