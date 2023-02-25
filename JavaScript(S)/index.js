let inputs = document.querySelectorAll('input[class="inputs"]')

for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener("focus", (event) => {
        event.target.style.outlineColor = "rgb(0, 255, 30)"
    })
    inputs[index].addEventListener("blur", (event) => {
        event.target.style.outlineColor = "black"
    })
}

let count = 0
let value = document.querySelector(".value")
let btns = document.querySelectorAll(".btn")

for (let index = 0; index < btns.length; index++) {

    btns[index].addEventListener("click", (event) => {
        let styles = event.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--
        } else if (styles.contains("increase")) {
            count++
        } else {
            count = 0
        }

        if (count > 0) {
            value.style.color = "#00ff2f"
        } else if (count < 0) {
            value.style.color = "red"
        } else if (count === 0) {
            value.style.color = "white"
        }
        value.textContent = count
    })
}