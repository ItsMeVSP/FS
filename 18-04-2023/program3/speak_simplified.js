const excl = document.getElementById("exclusion")
const stren = document.getElementById("strengthen")
const empha = document.getElementById("emphasize")
const wordInput = document.getElementById("wordInput")
const output = document.getElementById("output")

excl.addEventListener("click", () => apply("un"))
stren.addEventListener("click", () => apply("plus"))
empha.addEventListener("click", () => apply("doubleplus"))

function apply(prefix) {
    let word = wordInput.value
    let newWord = prefix + word
    output.innerHTML = newWord
}
