    /*
        A function is a block of code designed to perform, a particular task/procedure. 
        We invoke "call" the function whenever we want it to do something. 
        However, we need to define what the task the function should do
    */
    
    // arguments = values that are sent
    // parameters = values that are receive


    // First Example

    function sayWelcome(namePlease,myAge)//parameters
    {
        console.log("Welcome to the Coding univer");
        console.log("Here is where the magic begin");
        console.log("Enjoy your trip", namePlease);
        console.log("Hi",namePlease,myAge)

    }
    var namePlease = "MND"; // things declared outside the function can be called by the function too

    sayWelcome("MND", 40); // adding argument (values or variable we send to a function. the function take them as a parameter in return)


    //Second Example

    function bitcoinValue(price){
        var myResult = price * 2;
        return myResult;
    }

    // Creating an other function for exemple

    function ethereum(price){

        return price * 5;

    }
    
    

    // bitcoinValue(48,000); valid by the console won't show the result

    //here is how we can add the result by creating a new var and display with the console.log
    var myBitcoin = bitcoinValue(48,000);

    var myEthereum = ethereum(4.000);

    console.log("This is you bitcoin amount:", myBitcoin,"USD");

    console.log("This is you ethereum amount:", myEthereum,"USD");