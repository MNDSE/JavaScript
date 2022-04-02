
// console.time() = Starts a timer you can use to 
//                  track how long an operation takes
//                  Give each timer a unique name.


//  Start

console.time("It took");

setTimeout(() => console.log("Hey"), 3000);


// End

console.timeEnd ("It took");