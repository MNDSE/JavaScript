  
  // super = Reference to the parent class (super class)
//         Very similar to "this" keyword
//         Can use a super classes: constructor, methods



        class Family {
            // this is the parent class, so the proprety that will be use by the child can be
            // declared here we this.

            constructor(name, age){
                this.name = name;
                this.age = age;
            }
            // Creating a method in the parent class

            hello(){
                console.log("Welcome "+ this.name);
                console.log("You are "+this.age);
            }
        }

        class Parent extends Family{

            constructor(name, age, gender){
                // As the parent clase already declare name and age; we just need to use super to inherite from parent

                super(name,age);

                // eclare gender because its a property unique to the child class
                this.gender = gender;

            }
            // Creating methods

            hello(){
                console.log("Welcome "+ this.name);
                console.log("You are "+this.age);
                console.log("You gender is "+this.gender);
            }
        }

        class children extends Family{

            constructor(name,age, hobby){

                super(name, age);
                this.hobby = hobby;

            }
            hello(){
                // Here we can use super as well for the method
                    super.hello();
            
                console.log("You hobby is "+this.hobby);
            }
        }

        // Creating object

        let parent = new Parent("Pipo", 31,"M");
        let Children = new children("boby",12,"Tennis");

    //    console.log(parent.name);
    //    console.log(parent.age);
    //    console.log(parent.gender);

    //    console.log(Children.name);
    //    console.log(Children.age);
    //    console.log(Children.hobby);

            // calling the methods

            parent.hello();
            Children.hello();