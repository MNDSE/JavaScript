

let label = document.getElementById("Mylabel");

// creating the function

setInterval(displayTime,1000);

function displayTime(){

   let date = new Date();
    
    // making appear on the DOM

    Mylabel.innerHTML = date;

    Mylabel.innerHTML = timeFormat(date);

    // Let's format our date with the day and Time only

    function timeFormat(date){

        
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let timeZones = date.getTimezoneOffset(); 

        return ` ${hours}:${minutes}:${seconds}`
    }

}

displayTime();
timeFormat();