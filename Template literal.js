 
 // New feature as of (ES6)

// template literals = another way of formatting output,
//                     can contain placeholders for
//                     formatting and inserting: 
//                     strings/values/variables/etc.

//                     ` backticks
//                     ${} placeholder

//                     Can use multiple lines
//                     embed expressions



            let firstName = "Ansou";
            let lastName =  "Diatta";

            // adding some value
            let price = 20;
            let items = 2;
            let total;

            // Printing his full name

            console.log("Hello "+firstName+" " +lastName);


            // Writting the same with template literale to keep concatination simple

            console.log(`Hello ${firstName} ${lastName}!`);

            // Printing the total of purchase with template literal

            console.log(`Your total is: £${price * items}`);

            // Another way if we decide to not use template literale
            console.log("Your total is: "+"£" + price * items);
