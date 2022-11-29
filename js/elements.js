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

export { overlayPageEl, planetEl, planetElArr }