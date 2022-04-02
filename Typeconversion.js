
    // Type Conversion of numbers, strings, booleans
    // (Explicit vs Implicit)

    // change the datatype of a value to another


    var age = window.prompt("enter your age");
    console.log("You are eligible");
    age=Number(age); // changin the data type of value age
    age +=1;

    console.log(typeof age); // Show the datatype of a value
    console.log(age); 


    // Some other example of conversion
    var myVar;

    //myVar = Number(2.13);
    //myVar = String(2.13);

    myVar= Boolean(1);
    console.log(typeof myVar);
    console.log(myVar);


