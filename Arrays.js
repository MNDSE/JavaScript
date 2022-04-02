
    // array =  a special variable, 
    //          that can hold more than one value.

    //          Each "space" is known as an element

    //          You access elements in an array by referring
    //          to the index number ex.[0]


    var computerScience = ["Web programming", "AI","Database","Machine Learning"];

    console.log(computerScience[0]);
    console.log(computerScience[1]);


    computerScience.push("Networking"); // to add an element
    computerScience.pop(); // to delete the element 

    var numberOfClasses = computerScience.length;
    console.log(numberOfClasses);

    //  computerScience = computerScience.sort(); // to sort alphabetically/numerically
    // computerScience = computerScience.reverse(); // to reverse the order

    var lastclasse = computerScience[computerScience.length-1]; // to check the last element


    console.log(computerScience);
    console.log(lastclasse);