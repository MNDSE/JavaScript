
// this = A reference to the object that
//            we're currently working with


 class mackbook{

            
    
    constructor(model, year,color){
        // this referes to the object, for instance Macbook 1 here
        this.model = model;
        this.year = year;
        this.color = color;


    }

    // we can even create some method for our class

    coding(){
        console.log("It is amazing to code with" +this.model);
    
    }

    videoEditing(){
        console.log(this.model+ " It is super for that");
    }
}

//Creating the objects and assigned parameters

let Macbook1 = new mackbook("air M1", 2021, "Grey");
let Macbook2 = new mackbook("Pro M1", 2022,"gold");

Macbook1.coding();
Macbook2.videoEditing();

