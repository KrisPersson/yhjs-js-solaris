import { overlayPageEl, planetEl, planetElArr } from "./elements.js"
import { renderOverlayPage, toggleOverlay } from "./functions.js"


function applyEventListeners() {

    overlayPageEl.overlayPage.addEventListener('click', () => {
        toggleOverlay()
    })
    

    for (let planet in planetEl) {
    
        planetEl[planet].addEventListener('click', (event) => {
            const name = event.target.id
            const planetId = planetElArr.indexOf(planetEl[name])
            renderOverlayPage(planetId, name)
            toggleOverlay()
    
        })
    }
}

export { applyEventListeners }
