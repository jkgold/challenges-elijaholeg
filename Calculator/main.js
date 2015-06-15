$(document).ready(function() {
  var calculator = {};
  var storage = [];
  calculator.operations = function(string){
    console.log(string);
    var newString = string.match(/\+/);
    return newString;
  };
  calculator.clearScreen = function() {
    $('#print-here').empty()
  }

  $("#clear").click(function() {
    storage = [];
    console.log(storage)
    $('#print-here').empty();
  });

  $(".num").click(function(value) {
    storage.push(this.innerHTML)
    console.log(storage)
    return $('#print-here').append(this.innerHTML);
  });

  $(".operator").click(function() {
    console.log($('#print-here').val());
    $('#print-here').empty();
    storage.push(this.innerHTML)
      // console.log(storage)
  })
  $("#equals").click(function() {
    //$('#print-here').text(eval(storage));
    console.log(calculator.operations(eval(storage)));
  });

});
