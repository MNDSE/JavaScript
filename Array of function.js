


            // let's create different functions

            function sleep(){
                console.log("You sleep");
            }

            function eat(){
                console.log("You eat");
            }

            function study(){
                console.log("You study");
            }

            function exercise(){
                console.log("You exercise");
            }

            // let's create an array that will group them

            let student = [];

            // putting the functions in our array

            student = [sleep,eat,study,exercise];


            // Calling the array at index 1
            console.log(student[1]());

            // Calling the array functions with for loop

            for(i=0; i<student.length; i++){
                student[i]();
            }
