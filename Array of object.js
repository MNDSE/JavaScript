
/* Array object allow to take objects and turn it to an array */


        class computer {

            constructor(name, color){
                this.name = name;
                this.color = color;

            }
            use(){
                console.log("You are using the "+this.name);
            }
        }

        // the array (keep it empty for now)
        let asset = [];

        // creating objects

        let Computer1 = new computer("macbook air", "silver");
        let Computer2 = new computer("asus","black");

        // Let's transform the array using the two object above

        asset = [Computer1, Computer2];

        // ACCESSING OUR ARRAY 

        console.log(asset[0]);
        console.log(asset[1]);
        // ACCESSIN A PROPERTY WITHIN ARRAY 

        console.log(asset[0].name);
        console.log(asset[1].name);

        // USING IT WITH METHOD

        asset[0].use();
        asset[1].use();


        // USING A FOOR LOOP

        // for(let i = 0; i < asset.length; i++){

        // console.log(asset[i].model);
        // }