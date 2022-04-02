




// Get  element by ID
 let element = document.getElementById("myH1");
 element.style.backgroundColor= "lightgreen";


// Get element by Name
            let fruits = document.getElementsByName("fruits");

            fruits.forEach(fruit =>{
                if(fruit.checked){
                    console.log(fruit.value);
                }
            })

            let fruits2 = document.getElementsByTagName("li");

            fruits2[1].style.backgroundColor= "lightblue";

            // Get element by class Name

            let desserts = document.getElementsByClassName("desserts");

            desserts[1].style.backgroundColor = "red";

            // Using a querry selector to either select a class, id, li...

           /* let element = document.querySelector(".desserts");
            element.style.backgroundColor= "blue"; */

                        /*
            let element = document.querySelector("[for]");
            element.style.backgroundColor = "lightgreen";
            */
            /*
            let elements = document.querySelectorAll("[for]");
            elements.forEach(element => {
                element.style.backgroundColor = "lightgreen";
            })
            */