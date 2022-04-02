

/* A function expression allows to create a function from a variable. */


        // First example
   let election = function(){
            console.log("Yeewi askan wi won largely the legislative election")

        }

        election();   

        // Second example

      let saving = function(income,spending){
            return income - spending;
        }

        let result = saving(2500,1000);

       console.log(result); 

      
       // Third example with DOM and a fucntion call output

       let greeting = function(){console.log("Hello")};
let greeting = function(){document.getElementById("myH1").innerHTML = "Hello"};

output(greeting);

function output(func){

    func();
}