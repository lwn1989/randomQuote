var randomQuote = "hello world";
$(document).ready(function() {
  $.ajax({
        url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
        dataType:"jsonp", 
  });
  mycallback = function(json) {
    $("#quote-text").html(json[0].content);
    randomQuote = document.getElementById("quote-text").getElementsByTagName( 'p' )[0].innerHTML;
    $("#name").html('<p style="display:inline-block">--'+json[0].title+"</p>");
  };
   $("#new-quote").on("click", function(){
     $("#quote-sentence, #source").fadeOut("slow");
     $("#quote-sentence, #source").fadeIn("slow");
     $.ajax({
          url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
          dataType:"jsonp", 
    });
     mycallback = function(json) {
       $("#quote-text").html(json[0].content);
       randomQuote = document.getElementById("quote-text").getElementsByTagName( 'p' )[0].innerHTML;
       $("#name").html('<p style="display:inline-block">--'+json[0].title+"</p>");
     };
   });
  $("#tweet-button").on("click", function(){
    $("#tweet-link").attr("href", 'https://twitter.com/intent/tweet?text=' + randomQuote);
    });
});