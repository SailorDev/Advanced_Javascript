[1] Arrow Functions Benefits : 2
    -> less typing
    -> The way of play with (this) keyword.
    
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
# // ----------------------------------- //
[2] another example

    users.map(function (user) {

    });


    users.map((user) => {
        
    })

# // ----------------------------------- //

[3] Use FN dec.   VS  Arrow Function 

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


# // ----------------------------------- //
[4] Play with *THIS* keyword

    => It's easy with arrow functions.













