
/* A function that allow to secure some data 

 closure =  
            A function with preserved data.
            Give you access to an outer function’s scope,
            from an inner function.

            State of variables in outer scope are "saved".
            Variables in outer scope are considered "private".
*/


// In this example instead of declaring the variable money outside of the function
// We put inside the fucntion, so that it can't be changed by people
// You will see it does not increment after the first one so we create the second example




    let balance = function(){

            let money = 200;

            return money += 100;

        }
        // trying to change the variable by adding a 100 $ more to initial value but money like some cheater may try

            money += 100

        console.log(balance());

        console.log(balance());


        // Second example with closure (turn the first code comments on if you want to see the result)

        let balance = function(){
            let money = 200;
            // creating the closures 
            return function(){
                money += 200 ;
                return money;   
            }
        }();

        console.log(balance());
        console.log(balance());