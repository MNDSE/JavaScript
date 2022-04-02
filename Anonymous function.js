
/* Anonymous fucntion is a function that does not have a name

// anonymous function = 
//                      Function w/o a name. 
//                      Often not accessible after 
//                      its initial creation.
 
// benefits =   
//              Doesn't clutter global namespace
//              Usable once
//              Can be passed as arguments

// **************************
// IIFE = a JS function that runs as soon as it is defined
// grouping operator = ()

Can be used when wanted to display infos
*/


        // 1 example with grouping operator= ()

        (function(){
            document.getElementById("myH1").innerHTML=" Hello baby";
        })();

        // Second example we are going to use it as arguments
        // setTimout method (fucnction, miliseconds)

        setTimeout(function(){
            document.getElementById("myH1").innerHTML = "Take care !";
        }, 400);


        // writing is with a function expression

        let food = function(){
            document.getElementById("myH1").innerHTML = "yassa";
        };
        setTimeout(food,900);