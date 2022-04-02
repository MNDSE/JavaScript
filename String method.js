

    var sport = 'Soccer';

    var team = "Liverpool";
    var player = "Sadio Mane"

    var hisNumber = "10";

    console.log(sport.length); // showing the lenght
    console.log(sport.charAt(3)); // the character at index 3
    console.log(sport.indexOf("r")); // the index at character r


    console.log(sport);

    console.log(sport.trim());  // trim when there is spaces
    console.log(sport.toUpperCase()); 
    console.log(sport.toLowerCase());

        // Using slice method to cut some part // remember to create new variable

        var fav = sport.slice(0,3);
        console.log(fav);

        var fov = sport.slice(3, sport.indexOf("r"));
        console.log(fov);

        var myFavTeam = team.concat(" ",player); // to concatenate variables
        console.log(myFavTeam);

        // Using the replace method
        hisNumber = hisNumber.replaceAll(10, 12);

        console.log(hisNumber);