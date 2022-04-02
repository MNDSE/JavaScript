// bind() =  Borrows a function, & creates a copy. 
//           "this" keyword replaced with the object
//           passed in as an argument




        /*  speak = function (language){
            console.log(this.name, "speaks", language);
        }

        let senegalese = {
            name : "Modou",

        }

        let Chinese = {
            name : "Miyounha",
        }

        let talk = speak.bind(senegalese, "Wolof");
        let answer = speak.bind(Chinese, "Chinese");

        talk();
        answer();   */

        // An other example

        let senegalese = {
            name : "Modou",
            talk: function(){
                console.log(this.name, "speaks Wolof")
            }
        }

        let chinese = {
            name : "Miyounha",
            answer : function(){
                console.log(this.name, "answers in Chinese")
            }
        }

        // Now let's use our bind method to change stuff

        let speak = senegalese.talk.bind(chinese);

        speak();