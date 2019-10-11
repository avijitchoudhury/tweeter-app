$(document).ready(function () {

  let renderTweets = function (arr) {
    for (let tweet of arr) {
      createTweetElement(tweet);
    }
  }

  let loadTweets = async function () {
    await $.ajax ({
      url: `/tweets/`,
      method: 'GET',
      data: 'data',
      dataType: 'JSON'
    }).then((data) => {
      renderTweets(data);
    });
  }

  let postNewTweet = async function (data) {
    await $.ajax ({
      url: '/tweets',
      method: 'POST',
      data: data
    });
    loadTweets();
    $('#tweetBox').val('');
  }

  const escape = function (str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  const createTweetElement = function (tweet) {
    let markUp = `<article class="articleTweet">
      <header class="mainHeader">
    
        <div class="img_container">
          <img class="raphael" src=${tweet.user.avatars}>
          <span class="tweet_display_name">${tweet.user.name}</span>
          <span class="handler">${tweet.user.handle}</span>
        </div>
    
      </header>
    
      <div class="tweet_content">
        <p>
          ${escape(tweet.content.text)}
       </p>
      </div>
      <footer>
        <div class="tweet_footer">
          <span>10 days ago</span>
          <div class="img_footer">
           <i class="far fa-flag footer_icon"></i>
           <i class="fas fa-retweet footer_icon"></i>
           <i class="fas fa-heart footer_icon"></i>
          </div>
        </div>
          </footer>
    
        </article>`
    $('#tweetContainer').prepend(markUp);
    let clicked = true;

    $('.footer_icon').click(function () {
      if (clicked) {
        $(this).css('color', 'red');
        clicked = false;
      } else {
        $(this).css('color', 'black');
        clicked = true;
      }
    })
  }

  let tweetForm = $(".tweetForm");
  
  tweetForm.submit(function (event) {
    event.preventDefault();
    let textChar = tweetForm.serialize();
    let slicedText = textChar.slice(5, textChar.length)
    if (slicedText.length === 0) {
      return $('.errorMessageNoText').slideDown('slow', function() {
          setTimeout(function (){
            $('.errorMessageNoText').slideUp('slow')
          }, 4000)
        })
      
    } else if (slicedText.length > 140) {
      return $('.errorMessage').slideDown('slow', function() {
        setTimeout(function (){
          $('.errorMessage').slideUp('slow')
        }, 4000)
        })
    }
    postNewTweet(textChar);
  })
  loadTweets();
  
});














