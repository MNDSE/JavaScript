
// forEach() =  Performs a function for each 
//              element in an array.
// The forEach() method calls a function for each element in an array.
 // here element stands for the value in the array
 // an exemple of a shopping card
 // ForEach method can be use to calculate a total(sum), mutiplication and so on

    let total = 0;
    let cart = [5,5,5,5];

    // stands for the value in the array

    function checkOut(element)
    {
        
        total += element;


    }
    
    cart.forEach(checkOut); // calling car with for each to execute the function    

    console.log("The total is : $" +total)

    