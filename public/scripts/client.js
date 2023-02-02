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
  const loadTweets = () => {
    $.get('/tweets').then((data) => {
      renderTweets(data);
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
    if (charCount === 140) {
      alert("Please enter a tweet before tweeting!");
      return;
    } else if (charCount < 0) {
      alert("Please keep tweet within 140 characters in length!");
      return;
    }
    $.post('/tweets/', tweetData).then(() => {
     loadTweets();
    });
  });

});