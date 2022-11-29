// Allt asynkront och API-relaterat för att hålla det separat, och lättare överskådligt, från allt som händer internt.

const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com/'
let planetData

async function getAPIkey() {
    const resp = await fetch(`${BASE_URL}keys`, { method: 'POST'})
    const data = await resp.json()
    return data.key
}

async function callAPI() {

    const KEY = await getAPIkey()

    let resp = await fetch(`${BASE_URL}bodies`, {
        method: 'GET',
        headers: {'x-zocom': KEY}
    })
    let data = await resp.json()
    planetData = await data.bodies
}

export { callAPI, planetData }