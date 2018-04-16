// bot.js
var 
    twit = require('twit');
    config = require('./config');

var Twitter = new twit (config);

//Retweet #Hogibs
    var retweet = function(){
        var params = {
            q: '#Hogibtest, #hogibtest',
            result_type: 'recent'
        }
        Twitter.get('search/tweets', params, function(err, data) {
            if (!err) {
                var retweetId = data.statuses[0].id_str;
                Twitter.post ('statuses/retweet/:id', {
                    id: retweetId
                }, function(err, responce) {
                    if (responce) {
                        console.log('Retweeted!!!');
                    }
                    if (err) {
                        console.log('Somthing went wrong while retweeting. Dope...');
                    }
                });
            }
            else {
                console.log('Somthing went wrong while searching...')
            }
        });
    }
    //loop
    setInterval(function() {
	
        retweet();
        console.log('loop restarted')
    
       }, 5000);

// reply tweet
Twitter.post('statuses/update', {status: 'I love Hogib'}, function(error, tweet, responce){
    if(error){
        console.log(error);
    }
    console.log(tweet);
    console.log(response);
});
  