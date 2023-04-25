const part = document.getElementById("part")
const parts = document.getElementById("parts")
const addParts = document.getElementById("addParts")
const partsData = []
const partsObj = {
    part: "",
    features: [],
}

part.addEventListener("change", (e) => {
    partsObj.part = e.target.value
})


addParts.addEventListener("click", () => {
    if (partsObj.part === "") {
        console.log("Please select parts")
        return
    }
    partsData.push({ ...partsObj })
    partsObj.part = ""
    partsObj.features = []
    renderData()
})

function renderData() {
    let html = ``
    for (let data of partsData) {
        let features = data.features.join(", ")
        html += `<li>${data.part}: ${features}</li>`
    }
    parts.innerHTML = html
}
