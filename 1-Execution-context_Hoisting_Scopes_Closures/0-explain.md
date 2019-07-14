[1] Execution Context ::
        
    => Most important feature in JS to understand.
    
    => If i know this topic, it will be easy to understand :
        (scopes- scope chain - hoisting - Closure)
    
    => Good technique for writing code is to seperate code into function-modules

    => Allow JS engine to manage the complexity of interpresting code.

    => Using JavaScript Visualizer. (tool for visualizing Execution context, hoisting, closure, scopes)

    => Now Playing :
        1- First exection context created when JS engine run Code. 
                (Globalexecution context) 
                Phase: Creation
                Window: global Object
                this: window

        2- When i write code, then the phases play part   : 2 kind of phases.
                (Creation - exectios) phases

            var name= "Ali"
            var handle = "@ali"

            function getUser() {
                return {
                    name: name,
                    handle: handle
                }
            }

            => when js engine hit this ,,, this is happened!

            Global Execution Context 
                Phase: Creation
                window: global Object
                this: window
                name: undefined
                handle: undefined
                getUser: fn()

                $ Here ilocated memory space for variables and funcitons and assign variables declerations default for (undefined) and place any functions to fn().


            => Here is Exection Phase,, execute code line by line from top.

            Global Execution Context 
                Phase: Execution
                window: global Object
                this: window
                name: "Ali"
                handle: "@Ali"
                getUser: fn()

            // ------------------------------------- //

        3- Example :

            console.log('name: ', name)
            console.log('handle: ', handle)
            console.log('getUser: ', getUser)

            var name= "Ali"
            var handle = "@ali"

            function getUser() {
                return {
                    name: name,
                    handle: handle
                }
            }

            //--> Now The Creation Phase .. put var. and fn() (undefined)
                    Global Execution Context
                        Phase: Creation
                        window: global Object
                        this: window
                        name: undefined
                        handle: undefined
                        getUser: fn()


            //--> So, when Execution Phae .. line by line from top
                => Notice that all consoles are Undefined ..


        4- Hoisting === During Creation Phase in Execution Context, i set any variable declarations assigns to value (undefined)

            => Process of assigns var. dec. to default value (undefined) during creations Phase.

#// ---------------------------------------------------------------- //

    => There are another Execution Context: called (Function Exectution Context)
        -> Created when Function is (INVOKED) ().

        -> The only diff. between G.E.C and F.E.C 
        # Global Execution Context
            1-create global Object.
            2-create an object called (this)
            3-set up memory space for var. func.
            4-assign var. dec. a default value (undefined) while place any func. dec. in Memory.

        # Function Execution Context
            1-create Arguments Object.
            2-create an object called (this)
            3-set up memory space for var. func.
            4-assign var. dec. a default value (undefined) while place any func. dec. in Memory.

        -> Example :

            var name= "Ali"
            var handle = "@ali"

            function getUser() {
                return {
                    name: name,
                    handle: handle
                }
            }

            getUser()


            => 1-  Now The Creation Phase Begin ::
                    Global Execution Context
                        Phase: Creation
                        window: global Object
                        this: window
                        name: undefined
                        handle: undefined
                        getUser: fn()

            => 2- Then Execution Phase Begin ::
                    Global Execution Context 
                        Phase: Execution
                        window: global Object
                        this: window
                        name: "Ali"
                        handle: "@Ali"
                        getUser: fn()
            ==> But Here when i invoked The Function, JS engine set anew 
                            (getUser Execution Context)
                                phase: Creation
                                arguments: {length: 0}
                                this: window

                            (getUser Execution Context)
                                phase: Execution
                                arguments: {length: 0}
                                this: window
            
            ==> After Execution it ,, will remove from context.
            ==> THAT bring me to  (Execution Stack)
#// ---------------------------------------------------------------- //

[2] Execution Stack :: 

    => Any Time Function is invoked, a new execution context is created and Added to Execution Stack.

    => When Function finsih (Creation - Execution) Phases .. it's poped from Execution Stack.

    => Because JS is single threaded. we need only 1 Task be Executed on time .

    => Example :

        function a() {
            console.log('In fn a')

            function b() {
                console.log('In fn b');

                function c() {
                    console.log('In fn c')
                }

                c()
            }

            b()
        }

        a();


    => Now Implement this ::
    # The creation Phase
        1- Global Execution Context 
                phase: Creation
                window: global Object
                this: window
                a: fn()
        
    # The Execution Phase
        2- Global Execution Context 
                phase: Execution
                window: global Object
                this: window
                a: fn()

                    (a) Execution Context
                        phase: Execution
                        arguments: {length: 0}
                        this: window
                        b: fn()

                            (b) Execution Context
                                    phase: Execution
                                    arguments: {length: 0}
                                    this: window
                                    c: fn()

                                        (c) Execution Context
                                                phase: Execution
                                                arguments: {length: 0}
                                                this: window
                                                c: fn()


        ==> After finish executing,, the function poped from stack 
                c =---> b ---> a
#// ---------------------------------------------------------------- //

[3] Now Function have Local Variable ::
        
        => Example

            var name = "Alaa";
            var handle = "@alaa";
            function getURL(handle) {
                var twitterURL = "https://twitter.com/";
                return twitterURL + handle;
            }
            getURL(handle);

        => Now Implement This :
        # The creation Phase
            1- Global Execution Context 
                phase: Creation
                window: global Object
                this: window
                name: undefined
                handle: undefined
                getURL: fn()
            
        # The Execution Phase
            2- Global Execution Context 
                phase: Execution
                window: global Object
                this: window
                name: "Alaa"
                handle: "@alaa"
                getURL: fn()
                    # creation phase of function.
                    -> getURL Execution Context
                        phase: Creation
                        arguments: {0: "@alaa", length: 1}
                        this: window
                        twitterURL: undefined
                        handle: "@alaa"
                                |
                    # Execution phase of function. because have local var.
                    -> getURL Execution Context
                        phase: Execution
                        arguments: {0: "@alaa", length: 1}
                        this: window
                        twitterURL: "https://twitter.com"
                        handle: "@alaa"

        => After finish execute, 
                function execution context poped from stack.

        => This leading to Topic called Scope 

#// ---------------------------------------------------------------- //

[3] Scope ::  The Current context of Execution
    
    => the context in which values and expressions are visible. or be referenced.

    => Example: 
        function foo() {
            var bar = "Declared in foo";
        }
        foo();
        console.log(bar);

    => Implement This :
        > Global Execution Context
            phase: Creation
            window: global Object
            this: window
            foo: fn()

        > Global Execution Context
            phase: Execution
            window: global Object
            this: window
            foo: fn()

                > (foo) Execution Context
                    phase: Creation
                    arguments: {length: 0}
                    this: window
                    bar: undefined

                > (foo) Execution Context
                    phase: Execution
                    arguments: {length: 0}
                    this: window
                    bar: "Declared in foo"

        >>> When foo execution context finished ,, it's poped of from stack.
        >>> whan line goes to console.log(bar) 
        >>> it === undefined 

#// ---------------------------------------------------------------- //
    => Another Example :

        function first() {
            var name = "Ali";
            console.log(name);
        }

        function second() {
            var name = "Hossam";
            console.log(name);
        }

        console.log(name);        // undefined
        var name = "Muhammed";
        first();                  // Ali
        second();                 // Hossam
        console.log(name);        // Muhammed


    1- Implement This ::  /////////

        > Global Execution Context
            phase: Creation
            window: global Object
            this: window
            first: fn()
            second: fn()
            name: undefined

        > Global Execution Context
            phase: Execution
            window: global Object
            this: window
            first: fn()
            second: fn()
            name: "Muhammed"

                > (first) Execution Context
                    phase: creation
                    arguments: {length: 0}
                    this: window
                    name: undefined

                > (first) Execution Context
                    phase: Execution
                    arguments: {length: 0}
                    this: window
                    name: "Ali"

                (((( first Execution Context poped of from stack  ))))

                (((( Now step on second Execution Context  ))))
                
                > (second) Execution Context
                    phase: creation
                    arguments: {length: 0}
                    this: window
                    name: undefined

                > (second) Execution Context
                    phase: Execution
                    arguments: {length: 0}
                    this: window
                    name: "Hossam"

#// ---------------------------------------------------------------- //

[4] Scope Chain ::
    
    => Example:

        var name1 = "Kamal";
        function logName() {
            console.log(name1);
        }
        logName();


    => Implement this :

        > Global Execution Context
            phase: Creation
            window: global Object
            this: window
            name: Undefined
            logName: fn()

        > Global Execution Context
            phase: Execution
            window: global Object
            this: window
            name: "Kamal"
            logName: fn()

            
                > (logName) Execution Context
                    phase: Creation - Execution
                    arguments: { length: 0}
                    this: window

                >>>>> Now the logName Execution Context don't have local variable called (name);
                
                >>>>> So JS engine search on the closest Parent
                
                >>>>> search on 1st (current execution context) if not found
                
                >>>>> search on 2nd (Global execution context).
                
                >>>>> This is principle of Scope Chain ....

        > This Leading to Closure..


#// ---------------------------------------------------------------- //

[5] Closure   :: 

    > Example: 
    
        var count = 0;
        function makeAdder(x) {
            return function inner(y) {
                return x + y;
            };
        }

        var add5 = makeAdder(5);
        count += add5(2);


    ==> implement this 

        > Global Execution Context 
            phase: Creation
            this: window
            count: Undefined
            makeAdder: fn()
            add5: undefined

        > Global Execution Context 
            phase: Execution
            this: window
            count: 0
            makeAdder: fn()
            add5: undefined

                > (makeAdder) Execution Context 
                    phase: Creation
                    arguments: {0: 5, length: 1}
                    this: window
                    X: 5

                > (makeAdder) Execution Context 
                    phase: Execution
                    arguments: {0: 5, length: 1}
                    this: window
                    X: 5

                >>>> Now makeAdder() poped of from stack 
                
                >>>> Then, Closure Scope Happened, Because we have here a function nested in another function.
                
                >>>> The Inner function create (Closure) Over the outer function execution context.
                
                >>>> So, the variables on (Closure Execution Context) are the exact same the variables on (makeAdder() Execution Context).
                
                # cont. implement

                > Global Execution Context 
                    phase: Execution
                    this: window
                    count: 0
                    makeAdder: fn()
                    add5: undefined

                            Closure Scope
                                arguments: {0: 5, length: 1}
                                this: window
                                x: 5

                                (( invoke add5()  ))

                                        (inner) Execution Context
                                            phase: Creation
                                            arguments: {0: 2, length: 1}
                                            this: window
                                            Y: 2

                                            #I know y=2 & x=5 (scope chain)

                                        return 5 + 2 = 7  (count) 

// ------- // 

                                >>> Closure poped from stack.
                 # VERY important #               
    === If there is a funtion(inner) inside in another function(makeAdder)
        The inner function create (Closure) over the execution context variable environment of Parent Function

        # Notice that the inner function have access all variables on the parent function.(Closure Scope) even if the function context removed from stack .

#// ---------------------------------------------------------------- //

[6] RECAP ::
        
        > When JS program starts to run => it create 
            > ( Global Execution Context )
                > It has 2 phases (Creation - Execution)
                    > In Creation Phase :
                        -> set window: global object
                        -> set this: window
                        -> set variables to default (Undefined)
                        -> place Functions into memory fn()
                    > In Creation Phase :
                        -> The same above except :
                            set variables to identefiers.

            > (Function Execution Context )
                > Happen when invoke function , pushed to Stack of Execution.
                > It The Exact Same of Global Execution Context Execpt :
                    > creating of global Object, we create an Arguments Object which pass into that function.
                    
                > (Closure) When i have a Function inside another Function, Even if the Parent Function Execution Context Removed from Stack, The Inner Function will still Access the Variables of the Parent Function Execution Context
                
                > (Scope Chain) The JS engine look at the inner Execution Context to see if variables (x) exist, if it doesn't it will go up Scope Chain To the next closest. (CLosure Scope)









































































