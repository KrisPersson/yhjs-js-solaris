// Här ligger alla icke-asynkrona funktioner som ansvarar för hur sidan ändrar och renderar vy,
// baserat på användarens interaktion.


import { planetData } from "./api.js"
import { overlayPageEl } from "./elements.js"


function toggleOverlay() {
    overlayPageEl.overlayPage.classList.toggle('overlay-page--hidden')
    overlayPageEl.overlayPage.classList.toggle('animate')
    overlayPageEl.bigPlanet.classList.toggle('big-planet--visible')
}

function renderOverlayPage(planetId, name) {
    const planet = planetData[planetId]

    overlayPageEl.bigPlanet.classList = `sun planet--info planet--${name}`
    overlayPageEl.name.textContent = planet.name
    overlayPageEl.latinName.textContent = planet.latinName
    overlayPageEl.info.textContent = planet.desc
    overlayPageEl.circumference.textContent = `${spaceOutNum(planet.circumference)} km`
    overlayPageEl.distance.textContent = `${spaceOutNum(planet.distance)} km`
    overlayPageEl.maxTemp.textContent = `${spaceOutNum(planet.temp.day)} C`
    overlayPageEl.minTemp.textContent = `${spaceOutNum(planet.temp.night)} C`
    planet.moons.length !== 0 ? overlayPageEl.moons.textContent = `${planet.moons.map(plan => ` ${plan}`)}`
    : overlayPageEl.moons.textContent = `Inga`
}

function spaceOutNum(num) {

    let str = num.toString()
    let arr = str.split("")
    if (arr.length > 3) {
        const newArr = []
        let j = 1
        for (let i = arr.length; i > 0 ; i--) {

            newArr.unshift(arr[i - 1])

            if (j % 3 === 0) {
                newArr.unshift(" ")
            }
            j++     
        }
        if (newArr[0] === '') {
            newArr.shift()
        }

        str = newArr.join('')
    }
    
    return str
}

export { toggleOverlay, renderOverlayPage }