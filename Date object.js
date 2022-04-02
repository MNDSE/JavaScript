
    // date object = represents a moment in time

    let date;


    date = new Date(0); // random date epoch(reference point)

    date = new Date (); // this show the current date and time

    date = new Date(2022, 07, 14, 12, 00);

    // using string
    date = new Date(" August 22, 2021, 17:55:33:55"); // displaying the date with a string 

    // using the get function to retreive date elements
    /*
    let year = date.getFullYear();
    let month = date.getMonth();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();

    console.log(year);
    console.log(month);
    console.log(hour);
    console.log(minutes);
    console.log(second);  */
    //console.log(date);  


    // Using set to add new elements to our  or just simply a date

    date.setFullYear(2003);
    date. setMonth(0);
    date.setHours(19);

    console.log(date);