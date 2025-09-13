const screen = document.getElementById("display-text");
const numberedButtons = Array.from(document.getElementsByClassName("number"));
const operatorButtons = Array.from(document.getElementsByClassName("operator"));

let memory = 0;
let a = 0;
let b = 0;

let addition = false;
let subtraction = false;
let multiplication = false;
let division = false;

function operation(x, y, operator) {
    switch (operator) {
        case "+":
            return x + y;
        case "-":
            return x - y;
        case "x":
            return x * y;
        case "÷":
            return x / y;
    }
}

function resetOperations() {
    addition = false;
    subtraction = false;
    multiplication = false;
    division = false;
}

numberedButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (screen.textContent.length < 8) {
            if (addition || subtraction || multiplication || division) {
                screen.textContent += button.textContent.trim();
                b = Number(screen.textContent);
            }
            else {
                screen.textContent += button.textContent.trim();
            }
        }
    })
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.querySelector("span").textContent === "C") {
            screen.textContent = "";
            resetOperations();
        }

        if (button.querySelector("span").textContent === "+") {
            a = Number(screen.textContent);
            screen.textContent = ""
            resetOperations();
            addition = true;
        }

        if (button.querySelector("span").textContent === "-") {
            a = Number(screen.textContent);
            screen.textContent = ""
            resetOperations();
            subtraction = true;
        }

        if (button.querySelector("span").textContent === "x") {
            a = Number(screen.textContent);
            screen.textContent = ""
            resetOperations();
            multiplication = true;
        }

        if (button.querySelector("span").textContent === "÷") {
            a = Number(screen.textContent);
            screen.textContent = ""
            resetOperations();
            division = true;
        }

        if (button.querySelector("span").textContent === "=") {
            if (addition) {
                memory = operation(a, b, "+")
            }
            if (subtraction) {
                memory = operation(a, b, "-")
            }
            if (multiplication) {
                memory = operation(a, b, "x")
            }
            if (division) {
                memory = operation(a, b, "÷")
            }
            screen.textContent = memory;
            memory = 0;
            resetOperations();
        }

        if (button.querySelector("span").textContent === "+/-") {
            screen.textContent = String((screen.textContent) * -1);
        }
    })
})
