document.addEventListener("DOMContentLoaded", function(e) {
    //let btnCalc = document.getElementById("calc");
    let sumField = document.getElementById("player1_sum");
    let bonusField = document.getElementById("player1_bonus");

    let player1_ones_field = document.getElementById("player1_ones");
    let player1_twos_field = document.getElementById("player1_twos");

    player1_ones_field.addEventListener("change", function(e) {
        let sum = 0;
        let tmp = 0;

        tmp = player1_1.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        tmp = player1_2.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        tmp = player1_3.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        tmp = player1_4.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        tmp = player1_5.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        tmp = player1_6.value;
        if (typeof(Number(tmp)) === "number") {
            sum += Number(tmp);
        }

        
        sumField.value = sum;
        
        let bonus = 0;
        if (sum >= 63) {
            bonus = 50;
        }
        bonusField.value = bonus;
    })
})

