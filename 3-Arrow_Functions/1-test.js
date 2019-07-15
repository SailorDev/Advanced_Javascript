// fn Declaration
function add(x, y) {
	return x + y
}

// fn Expression
var add = function(x, y) {
	return x + y
}

// Arrow Function
var add = (x, y) => {
	return x + y
}

// ---------------------------------------- //
users.map(function (user) {

});


users.map((user) => {

})

// ---------------------------------------- //

function getTweets(uid) {
	return fetch('https://api.users.com/' + uid)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			return response.data;
		})
		.then(function (tweets) {
			return tweets.filter(function (tweet) {
				return tweet.stars > 50;
			});
		})
		.then(function (tweets) {
			return tweets.filter(function (tweet) {
				return tweet.rts > 50
			})
		})
}

// Use Arrow Functions 

function getTweets(uid) {
	return fetch('https://api.users.com/' + uid)
		.then(response => response.json())
		.then(response => response.data)
		.then(tweets => tweets.filter(tweet => tweet.stars > 50))
		.then(tweets => tweets.filter(tweet => tweet.rts > 40))
}




















