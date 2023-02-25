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
            value.style.color = "green"
        } else if (count < 0) {
            value.style.color = "red"
        } else if (count === 0) {
            value.style.color = "black"
        }
        value.textContent = count
    })
}