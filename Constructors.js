

// constructor = A special method for assigning properties.
//                          Automatically called when creating an object.



        class mackbook{

            
            // Constructor goes in side the class to allow to create properties for the class computer
            constructor(model, year,color){
                // to assing the porperties
                this.model = model;
                this.year = year;
                this.color = color;


            }

            // we can even create some method for our class

            coding(){
                console.log("It is amazing for coding");
            
            }

            videoEditing(){
                console.log("It is super for that");
            }
        }

        //Creating the objects and assigned parameters

        let Macbook1 = new mackbook("air M1", 2021, "Grey");
        let Macbook2 = new mackbook("Pro M1", 2022,"gold");

        console.log(Macbook1.model);
        console.log(Macbook1.year);
        console.log(Macbook1.color);

        console.log(Macbook2.model);
        console.log(Macbook2.year);
        console.log(Macbook2.color);

