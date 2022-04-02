// scope = where a variable is accessible

// let = declare variables with a block scope {}
// var = declare variables with a function scope ()
// also var take override some properties of the window like name


        for (let i=1; i<=3; i++){
            console.log(i);
        }

        // You will see that we can't call i outside the bracket
        console.log(i); 

        for (var i=1; i<=3; i++){
            console.log(i);
        }
        // You will see that we can call i outside the bracket unlike let

        console.log(i); 

        var name= "Ndende"        
