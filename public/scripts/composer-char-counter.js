let characterLength = 140; //creating a variable for max amount of characters

$(document).ready(function() {

  $("#tweetBox").on( 'keyup keydown', function() {
    let length = $(this).val().length;
    console.log($(this).val())
    console.log(length) //keyup event sent to an element when user releases key on keyboard
    let lengthRemaining = characterLength-length;
    $("#characters").text(lengthRemaining); //text method gives combined text contencts of each element
    if($('#tweetBox').val().length > characterLength) {
      $('#characters').css('color', 'red');
    }
    else {
      $('#characters').css('color', 'black');
    }
  })
});




