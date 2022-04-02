
/* Class is a blue print; just like creating a computer and indicate what you can do with it
 class = A "blueprint" for creating objects.
               Define properties and/or methods.  */


               
// let's have a look at this example 


        class computers{

            // Adding  method using functions of a computer

            writeCode(){
                console.log("You can write code in your favorite programming language");
            }

            playGame(){
                console.log("You can play games on it");
            }
        }

        // We need to create object (with let variable) of computers to call each methods

        let Computer1 = new computers();
        let computer2 = new computers();

        Computer1.writeCode();
        computer2.playGame();
        