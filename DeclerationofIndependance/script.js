
function repeatedText(text) {
  var wordArray = splitWord(text);
  var wordCount = {};
  wordArray.forEach(function(word){
    if (wordCount[word]){
      wordCount[word]++;
    }
    else{
      wordCount[word]=1;
    }
  });
  var sortedWords = wordSorter(wordCount);
  return sortedWords;
}


function splitWord(text){

  var simplyWords = text.match(/\w|\s/g).join("");
  return simplyWords.split(" ");
}



function wordSorter(dict){
  var wordArray = [];
  for(var key in dict){
    var count = {};
    count[key] = dict[key];
    wordArray.push(count);
  }
  return wordArray.sort(objSorter);
}

function objSorter(a,b) {
  return b[Object.keys(b)[0]] - a[Object.keys(a)[0]];
}

$(document).ready(function(){
  $('.btn').on('click', function(){
    var arrays = repeatedText($('#textArea').val());
    for(i=0 ; i < 10 ; i++){
      for (var key in arrays[i]){
        var arrays10 = $("<p></p>"); 
        arrays10.addClass("topTen")
        arrays10.text(key + ": " + arrays[i][key]);
        $(".result").append(arrays10)
      };
    };
  });
})