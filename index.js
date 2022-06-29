window.addEventListener('DOMContentLoaded', () => {
    let equalpressed = 0;
    //Refer all buttons excluding AC and DEL
    const BUTTON_INPUT = document.querySelectorAll(".input_button");

    //Refer operators
    let input = document.getElementById("input");
    const EQUAL = document.getElementById("equals");
    const CLEAR = document.getElementById("clear");
    const CLEAR_ALL = document.getElementById("clear_all");

    window.onload = () => {
        input.value = "";
    };
    //Access each class using forEach
    BUTTON_INPUT.forEach((button_class) => {
        button_class.addEventListener("click", () => {
            if (equalpressed == 1) {
                input.value = "";
                equalpressed = 0;
            }
            //display value of each button
            input.value += button_class.value;
        });
    });

    //Solve the user's input when clicked on equal sign
    EQUAL.addEventListener("click", () => {
        equalpressed= 1;
        let inp_val = input.value;
        try {
            //evaluate user's input
            let solution = eval(inp_val);
            //True for natural numbers
            //false for decimals
            if (Number.isInteger(solution)) {
                input.value = solution;
            } else {
                input.value = solution.toFixed(2);
            }
        } catch (err) {
            //If user has entered invalid input
            alert("Invalid Input");
        }
    });

    //Clear Whole Input
    CLEAR_ALL.addEventListener("click", () => {
        input.value = "";
    });
    //Erase Single Digit
    CLEAR.addEventListener("click", () => {
        input.value = input.value.substr(0, input.value.length - 1);
    });
})