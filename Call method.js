
/* The call method : is a method that allow to call a fonction for an other 
object to use it.

// call() = predefined method that can
//          call a method belonging to
//          another object.

//          Whichever object you want to use
//          that method with, pass that object
//          as an argument within call()
//          this = object passed in
*/

// In this example we going to list the role of each persons working on a tech company

// First object


                let frontEnddev = {
                    name : "Rafat",
                    website: function (){
                        console.log(this.name + " Implements the UI design using programming languages.")
                    }

                }

                let backEnddev = {
                    name : "Syed",
                    server: function(){
                    console.log(this.name + " Implements the server of the website.")
                    }
                }

                let projectMan = {
                    name : "Linda",
                    marketing: function (){
                        console.log(this.name+ " Implements marketing strategies.")
                    }
                }

                // Simply printing tfunctions and Name
                frontEnddev.website();

                projectMan.marketing();
                backEnddev.server();

                console.log(projectMan.name);
                console.log(backEnddev.name);

                // Now we will try to replace some of them in case that they get sick or fired or resign
                // Basically, we gonna swithe

                // Let's rafat decide to resign

                frontEnddev.website.call(backEnddev);

                backEnddev.server.call(projectMan);