import { drawStars } from "./stars.js";
import { callAPI, planetData } from "./api.js";

const overlayPageEl = {
    overlayPage: document.querySelector('.overlay-page'),
    info: document.querySelector('.info-section__p'),
    name: document.querySelector('.info-section__name'),
    latinName: document.querySelector('.info-section__latin-name'),
    circumference: document.querySelector('.info-section__circumference'),
    distance: document.querySelector('.info-section__distance'),
    maxTemp: document.querySelector('.info-section__max-temp'),
    minTemp: document.querySelector('.info-section__min-temp'),
    moons: document.querySelector('.info-section__moons'),
    bigPlanet: document.querySelector('.planet--info')
}

overlayPageEl.overlayPage.addEventListener('click', () => {
    toggleOverlay()
})

const planetEl = {
    sun: document.querySelector('#sun'),
    mercury: document.querySelector('#mercury'),
    venus: document.querySelector('#venus'),
    earth: document.querySelector('#earth'),
    mars: document.querySelector('#mars'),
    jupiter: document.querySelector('#jupiter'),
    saturn: document.querySelector('#saturn'),
    uranus: document.querySelector('#uranus'),
    neptune: document.querySelector('#neptune'),
}

const planetElArr = [
    planetEl.sun,
    planetEl.mercury,
    planetEl.venus,
    planetEl.earth,
    planetEl.mars,
    planetEl.jupiter,
    planetEl.saturn,
    planetEl.uranus,
    planetEl.neptune
 ]

for (let planet in planetEl) {

    planetEl[planet].addEventListener('click', (event) => {
        const name = event.target.id
        const planetId = planetElArr.indexOf(planetEl[name])
        const planet = planetData[planetId]
        console.log(planet)
        renderOverlayPage(planetId, name)
        toggleOverlay()

    })
}



function toggleOverlay() {
    overlayPageEl.overlayPage.classList.toggle('overlay-page--hidden')
    overlayPageEl.overlayPage.classList.toggle('animate')
    overlayPageEl.bigPlanet.classList.toggle('big-planet--hidden')

}

function renderOverlayPage(planetId, name) {
    const planet = planetData[planetId]

    overlayPageEl.bigPlanet.classList = `sun planet--info planet--${name}`
    console.log(overlayPageEl.bigPlanet.classList)
    overlayPageEl.name.textContent = planet.name
    overlayPageEl.latinName.textContent = planet.latinName
    overlayPageEl.info.textContent = planet.desc
    overlayPageEl.circumference.textContent = `${spaceOutNum(planet.circumference)} km`
    overlayPageEl.distance.textContent = `${spaceOutNum(planet.distance)} km`
    overlayPageEl.maxTemp.textContent = `${spaceOutNum(planet.temp.day)} C`
    overlayPageEl.minTemp.textContent = `${spaceOutNum(planet.temp.night)} C`
    // overlayPageEl.minTemp.textContent = `${planet.temp.night} C`
    planet.moons.length !== 0 ? overlayPageEl.moons.textContent = `${planet.moons.map(plan => ` ${plan}`)}`
    : overlayPageEl.moons.textContent = `Inga`
}

function spaceOutNum(num) {

    let str = num.toString()
    let arr = str.split("")
// return  arr
    if (arr.length > 3) {
        const newArr = []
        console.log(arr.length)
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

callAPI()
drawStars()
