document.addEventListener("DOMContentLoaded", function() {


});

//beräkning av summa 1-6or och testar bonus
function calculate(event) {
    event.preventDefault();
    for (let i = 1; i <= 4; i++) {
        let elements = document.getElementsByClassName("player" + i);
        let sum = 0;
        let bonus = 0;
        for (let element of elements) {
            sum += Number(element.value);
        }
        if (sum >= 63) {
            bonus = 50;
        }
        document.getElementById("player" + i + "_sum").innerHTML = sum;
        document.getElementById("player" + i + "_bonus").innerHTML = bonus;
    }
}


//kör calculatefunctionen när man trycker enter
document.addEventListener("keyup", function(event) {
    /* if(event.code === "Enter"){
         event.preventDefault();
         calculate(event);
     } */
    calculate(event);
});



let button_1 = document.getElementById("button_1"); //knapp för att slå tärningar





//funktion för att slumpa tärningar
function throw_dice(event) {

    let remaining_throws = document.getElementById("remaining_throws");

    if (remaining_throws.innerHTML >= 0) { // Minskar remaining throws med ett varje gång man klickar på knappen,
        remaining_throws.innerHTML -= 1; //och kör bara funktionen om remaining_throws är större än 0. 

        //event.preventDefault(); - behövs ej efter att ha flyttat ut throw-knappen ur dice-form.
        let dice = 0;

        for (let i = 1; i <= 5; i++) {
            if (!document.getElementById("check_" + i).checked) {
                dice = Math.floor(Math.random() * 6) + 1;
                for (let j = 1; j <= 6; j++) {
                    let image = document.getElementById("img_" + i);
                    if (dice == j) {
                        image.src = "img/dice_" + j + ".png";
                    }

                }
            }
        }
    }

    if (remaining_throws.innerHTML == -1) { // När remaining throws är -1 så sätter vi om värdet på remaining throws till 3. 
        remaining_throws.innerHTML = 3; // I koden under så återställer vi tärningarna till 1 och gör icheckade boxar urcheckade. 

        for (let j = 1; j <= 5; j++) {
            let image = document.getElementById("img_" + j);
            image.src = "img/dice_" + 1 + ".png";
            if (document.getElementById("check_" + j).checked) {
                document.getElementById("check_" + j).checked = false;
            }
        }
    }
}



button_1.addEventListener("click", throw_dice); //eventlyssnare som kör funktionen throw_dice