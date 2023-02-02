/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Creates an article for tweet object uses timeago
// determining if textarea in new tweet form is either FULL or EMPTY
const EMPTY_TWEET_CHAR_COUNT = 140;
const MAX_TWEET_CHAR_COUNT = 0;

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
  for (let i = data.length - 1; i >= 0; i --) {
    const newTweet = createTweetElement(data[i]);
    $('#tweets-container').append(newTweet);
  }
};
const renderTweet = (data) => {
  const newTweet = createTweetElement(data);
  $( '#tweets-container' ).prepend(newTweet);
};
  const loadTweets = () => {
    $.get('/tweets').then((data) => {
      renderTweets(data);
      $('#tweet-text').val('');
    });
  };
  const loadNewTweet = () => {
    $.get('/tweets').then((data) => {
      renderTweet(data[data.length - 1]);
      $( '#tweet-text' ).val('');
      $( 'output.counter' ).val(140);
    });
  };
///Makes get request to tweets database at /tweets
// then uses renderTweets to loop through  the database
// and render each tweet as an article.
$( document ).ready(function() {
  loadTweets();
  $('.new-tweet form').submit(function(event) {
    event.preventDefault();
    const tweetData = $(this).serialize();
    const charCount = Number($( 'output.counter' ).val());
    if (charCount === EMPTY_TWEET_CHAR_COUNT) {
      alert("Please enter a tweet before tweeting!");
      return;
    } else if (charCount < MAX_TWEET_CHAR_COUNT) {
      alert("enter within 140 characters!!");
      return;
    }
    $.post('/tweets/', tweetData).then(() => {
     loadNewTweet();
    });
  });

});