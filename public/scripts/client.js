/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Creates an article for tweet object uses timeago

const createTweetElement = (data) => {
  const newTweet = `
  <article class="tweet">
    <header class="flex-container-row">
      <div class="profile-pic-username flex-container-row">
        <img src="${data.user.avatars}"/>
        <p>${data.user.name}</p>
      </div>
      <p class="handle">${data.user.handle}</p>
    </header>
    <section class="tweet-content">
      <p>${data.content.text}</p>
    </section>
    <footer>
      <p class="time-created">${timeago.format(data.created_at)}</p>
      <div>
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article>
  `;
return newTweet;
};

// Loops through tweet database object, uses createTweetElement()
const renderTweets = (data) => {
  $('#tweets-container').empty();
  for (const tweet of data) {
    const newTweet = createTweetElement(tweet);
    $('#tweets-container').append(newTweet);
  }
};


const data = [
  {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
   "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

$( document ).ready(function() {

  renderTweets(data);

});