let characterLength = 140; //creating a variable for max amount of characters

$(document).ready(function() {

  $("#tweetBox").on( 'keyup keydown', function() {
    let length = $(this).val().length;
    let lengthRemaining = characterLength-length;
    $("#characters").text(lengthRemaining); //text method gives combined text contencts of each element
    if($('#tweetBox').val().length > characterLength) {
      $('#characters').css('color', 'red');
    }
    else {
      $('#characters').css('color', 'black');
    }
  })

  $('.navDiv').on('click', () => {
    if($('.new-tweet').css('display') === "none") {
    $('.new-tweet').slideDown('slow');
    } else {
        $('.new-tweet').slideUp('slow');
    }
    $('#tweetBox').focus()
  })

});








