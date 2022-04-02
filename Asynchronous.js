


// This is synchronous: code run in order : top - down

let come = function(){
    console.log("Come in !");
   // alert("Hi visitor");
}

let go = function(){
    console.log("See u buddy !");
}

come();
go();

// To make it asynchronous = code that run in parallel with other code
// We bring our alert down here

setTimeout(sayHello, 3000);

function sayHello(){
    alert("Hi visitor");
}