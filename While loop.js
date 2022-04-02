
    // while loop checks the condittion first
    // Do while checks the body first


    var saythanks = window.prompt("Please say something. We would like to hear your opinion");

    while(saythanks ==""){
        // this will keep the window prompt
        saythanks = window.prompt("Please say something. We would like to hear your opinion");

    }
    console.log("Thank you for the message. We appreciate it"); 

    // second example

    do{
        saythanks = window.prompt("Please say something. We would like to hear your opinion");
    } while(saythanks=="")

    console.log("thanks again");