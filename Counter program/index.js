let countEl = document.getElementById("count");
let savedEl = document.getElementById("previous-count");

let counter = 0;

// Buttons' Operations
let decreaseBtn = document.getElementById("decrease-btn");
let increaseBtn = document.getElementById("increase-btn");
let resetBtn = document.getElementById("reset-btn");
let saveBtn = document.getElementById("save-btn");
let clearBtn = document.getElementById("clear-btn");


// Button Functions
decreaseBtn.addEventListener("click", () => {
    counter--;
    if (counter < 0) {
        countEl.style.color = "red";
    }
    countEl.innerHTML = counter;
})

resetBtn.addEventListener("click", () => {
    counter = 0;
    if (counter === 0) {
        countEl.style.color = "black";
    }
    countEl.innerHTML = counter;
})

increaseBtn.addEventListener("click", () => {
    counter++;
    if (counter > 0) {
        countEl.style.color = "green";
    }
    countEl.innerHTML = counter;
})

saveBtn.addEventListener("click", () => {
    savedEl.innerHTML += counter + " - ";
})

clearBtn.addEventListener("click", () => {
    savedEl.innerHTML = "";
})

