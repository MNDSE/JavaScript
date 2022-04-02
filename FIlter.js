
// filter() = Returns the elements of an array
//                that meets a condition specified
//                in a function. 


// Filter method allows to filter a range of array for a new array.
// Like in this exemple we will filter the studen that has a grade less than 60



        let grade= [90,50,69,60,45,56,78,83];

        //lets create function that verify the student that has a grade less than 60

        function chekgrade(grade){
            if (grade<60){
                return grade;
                // we have to returd the value just like in the map method
            }
        }

        let lowgrade = grade.filter(chekgrade);
        console.log(lowgrade);
        console.log("These are the following low grades:"+lowgrade);