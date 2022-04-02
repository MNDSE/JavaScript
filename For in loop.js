    // for in loop = Loops through the elements in an array
    //               or the properties of an Object
    //               less syntax to write, but less flexible


    let letters = ["H","E","L","P"];

    /*  for(let i = 0; i < letters.length; i++){
        console.log(letters[i]);
    }
    */

    for(let i in letters){
        console.log(letters[i]);
    }

    // Creating with an object

    let Car= {
        make: "Kia",
        model: "K7",
        year:2021,
        color:"black",
    }
    for(property in Car){
        console.log(Car[property]);

    }