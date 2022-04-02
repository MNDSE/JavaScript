    // arrow function =>
    po// shortcut for a function expression


 /*     let hello;


     // Function expression

        hello = function(){
            return "hello all";
        }
        console.log(hello());

        // Creating the same with function arrow

        hello = () => "hello guys and girls"; //arrow function

        console.log(hello());  */



// Creating an other example wiht arguments

        // This is an example if we want to add arguments and parameters
  /*      let hello;
        let name = "yace";
        // function expression

        hello = function(name){
            return name + " welcome";

        }
        console.log(hello(name));

        // arrow function

        hello = name => name + " welcome";
        console.log(hello(name));  */

        // Here we will create a function with 3 arguments

                            let hello;
                            let name = "mendy";
                            let mess = " the best";

                        // Fucntion expression

                        hello = function(name,mess){
                            return name +""+ mess;
                        }
                        console.log(hello(name,mess));

                        // Arrow function

                        hello = (name,mess) => name +""+ mess;
                        console.log(hello(name,mess));

                        // arrow function w/ multiple lines
                    // *********************

                    /*  hello = (x,y) => {
                            console.log(x);
                            console.log(y);
                        };
                        hello(x,y); */


                            // MAP
                         // *********************


                    // this is the code we had before

                /*  let priceInEuro = [5,2,3];

                        function toCfa(value){
                            value*= 600
                            return value 
                        } // we need return here


                        let priceInCfa = priceInEuro.map(toCfa);
                        console.log(priceInCfa);
                        
                        console.log("This is the price in cfa:" + priceInCfa)
                        //we can call priceinEuro too
                        console.log(priceInEuro) */

                    // using arrow function

                    let priceInEuro = [5,2,3];

                    function toCfa (value){
                        value *= 600;
                        return value;
                    }

                    let priceInCfa = priceInEuro.map(value =>value *= 600);
                    console.log(priceInCfa);