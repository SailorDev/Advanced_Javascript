[1] It's a new feature on ES2015.

    > To know it must know the basics of Objects of JS.
        let user = {
            name: "Muhammed",
            handle: "@alaa",
            location: "ismailia, egypt"
        };
        let name = user.name;
        name = "kamal";
        console.log(name);

    > I want extract properties and add ones to object.
    > Before ES6, it's so hard to extract and add properties at the same time.
    > Just like Object Literal Notation which add properties to Object.
    > Destructuring == allow us to extract multible properties from an Object.

        var {name, handle, location} = user;

        => That's allow us to decrease the code used!
    > When add === play on right side 
    > when extract === play on left side
    
    > Can also destructure Results Functions Invocation.
            
            function getUser() {
                return {
                    name: "Muhammed",
                    handle: "@alaa",
                    location: "ismailia, egypt"
                }
            }

            var {name, handle, location} = getUser()

    > Extract Data from Object  === Destructuring.
    
    > Array Destructuring === Allow Extract items from an array.
    
        var csv = "1998, Ford, F23io, Must Sell";
        var [year, make, model, description] = csv.split(',');

    > Destructuring == Extract Data from Object or Array.
    
    > Now i wanna destructuring with different names.to make it easy
        
        var user2 = {
            n: "Muhammed",
            h: "@alaa",
            l: "ismailia, egypt"
        };

        let {n: name, h: handle, l: location} = user2;

        console.log(name)
        console.log(handle)
        console.log(location)

    > antother example : React App
        const { component: Component, to, replace, ...rest} = this.props;

// ------------------------------------------ //
[2] Function arguments and parameters ::

    => To Solve the problem of order ..

    function fetchRepos({language, minStars, maxStars, createBefore, createAfter}) {

    };

        // fetchRepos('java', 100, null, new Date('01,01/2019').getTime(), null);

        fetchRepos({
            language: 'java',
            maxStars: null,
            createAfter: null,
            createBefore: new Date('01,01/2019').getTime(),
            minStars: 100
        });

    => I can remove any of unneccessary arguments. in function invocation.

    => we need to establish default values of arg. Obj. when fn is invoked.

        function fetchRepos({language='All', minStars=0, maxStars='', createBefore='', createAfter='' }) {

        };

    => Using in Promise.all([])

    => use destructuring inside function parameters .

            function getUserData(player) {
            return Promise.all([
                getProfile(player),
                getRepos(player)
            ]).then(function (data) {
                var profile = data[0];
                var repos = data[1];
                // var [profile, repos] = data;    // destructuring

                return {
                    profile: profile,
                    repos: repos
                }
            })
        }
        ///  

        function getUserData(player) {
            return Promise.all([
                getProfile(player),
                getRepos(player)
            ]).then(function ([profile, repos]) {      // ddestructuring
                return {
                    profile: profile,
                    repos: repos
                }
            })
        }
        ///  

        function getUserData(player) {
            return Promise.all([
                getProfile(player),
                getRepos(player)
            ]).then(([ profile, repos ]) => ({ profile, repos }))    // destructuring
        }
