/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $(document).ready(function () {
  
//   const data = [
//     {
//       "user": {
//         "name": "Newton",
//         "avatars": "https://i.imgur.com/73hZDYK.png"
//         ,
//         "handle": "@SirIsaac"
//       },
//       "content": {
//         "text": "If I have seen further it is by standing on the shoulders of giants"
//       },
//       "created_at": 1461116232227
//     },
//     {
//       "user": {
//         "name": "Descartes",
//         "avatars": "https://i.imgur.com/nlhLi3I.png",
//         "handle": "@rd"
//       },
//       "content": {
//         "text": "Je pense , donc je suis"
//       },
//       "created_at": 1461113959088
//     }
//   ]

  
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
              ${tweet.content.text}
            </p>
          </div>
          <footer>
            <div class="tweet_footer">
              <span>10 days ago</span>
              <div class="img_footer">
                <img src="/images/flag.png" alt="">
                <img src="/images/retweet-arrows-symbol.png" alt="">
                <img src="/images/heart.png" alt="">
              </div>
            </div>
          </footer>
    
        </article>`
        $('#tweetContainer').append(markUp)
    }

    let renderTweets = function (arr) {
      for(let tweet of arr) {
        createTweetElement(tweet)
      }
    }
    
    let tweetForm = $(".tweetForm")
    tweetForm.submit( async function(event) {
      event.preventDefault();
      try {
        const response = await $.ajax ({
          url: `/tweets/`,
          type: 'POST',
          dataType: 'JSON',
          data: tweetForm.serialize()
        })
      } catch (error) {
        console.error(error)
      }   
    })
    
      let loadTweets = async function () {
      
         await $.ajax ({
          url: `/tweets/`,
          type: 'GET',
          data: 'data',
          dataType: 'JSON'
        }) .then((data) => {
          renderTweets(data);
        })  
    }  
    loadTweets(); 
});










