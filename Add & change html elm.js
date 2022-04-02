
    // .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)


        const element = document.createElement("h2");

        // This help to put the content of our H2
        element.textContent = ("Avec le temps");

        // We could use this method but not safe
       // element.innerHTML = window.prompt("What up?");

        // Append will display the element on the HTML
        document.body.append(element);


        // let's add an element to our list

        const eat = document.querySelector(".myFood");

        const newFood = document.createElement("li");

        newFood.textContent = "Thiebe";
        
        eat.append(newFood);