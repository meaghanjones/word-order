$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = $("input#sentence").val();
    var newArr = blanks.split(" ");
    newArr = sortWords(newArr);
      for(var i=0; i<newArr[0].length;i++){
        $(".result").text(function(){
                $("ul").append("<li>"+newArr[0][i] + " "+ newArr[1][i]+"</li>");
            });
      };

    event.preventDefault();
  });
});

function sortWords(words){
  var a=[], b=[], prev;
  words.sort();
  words.forEach(function(word){
    if(word !== prev){
      a.push(word);
      b.push(1);
    }
    else{
      b[b.length-1]++;
    }
    prev = word;
  });
  return [a, b];
}
