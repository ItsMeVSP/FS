const formContainer = document.getElementById("formContainer")
const cityInput = document.getElementById("city")
const genForm = document.getElementById("genForm")

genForm.addEventListener("click", generateForm)

function generateForm() {
    let city = cityInput.value
    city = city.toLowerCase()
    let items = 0
    switch (city) {
        case "mas":
            items = 15
            break
        case "cbe":
        case "mdu":
            items = 12
            break
        case "sal":
            items = 8
            break
        case "tpj":
            items = 6
            break
        case "tut":
            items = 2
            break
        default:
            break
    }

    let form = ""
    for (var i = 1; i <= items; i++) {
        form += `<input type="text" placeholder="Enter item" /> <br>`
    }
    formContainer.innerHTML = form
}
