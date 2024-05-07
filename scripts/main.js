import { ownJeansChoices } from "./ownsJeans.js"
import { locationTypeChoices } from "./ubranDweller.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = ownJeansChoices()
    const locationsHTML = await locationTypeChoices()

    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationsHTML}`
}

render()