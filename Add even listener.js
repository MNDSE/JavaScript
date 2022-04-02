// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element.
// Even the same event that invokes different functions


        const innerDiv = document.getElementById("innerDiv");

        innerDiv.addEventListener("mouseover", changeBlue);
        innerDiv.addEventListener("mouseout", changeRed);

        function changeBlue(){
            innerDiv.style.backgroundColor = "Black";
        }

        function changeRed(){
            innerDiv.style.backgroundColor="red";
        }