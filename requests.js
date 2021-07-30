

//generates a random number for country
const getRandomINT250 = () => {
    n = Math.random() * 250
    n = Math.round(n)
    return n
}
//fetching a random country name for the puzzle
// const getPuzzle = () => {
//         const req = new XMLHttpRequest
//         req.open('GET', "https://restcountries.eu/rest/v2/all")
//         req.send()
//         var countryJSON
//         var countryOBJ
//         var randomCountry
//         req.addEventListener('readystatechange', (e) => {
//             if (e.target.readyState === 4 && e.target.status === 200) {
//                 countryJSON = req.responseText
//                 countryOBJ = JSON.parse(countryJSON)
//                 randomCountry = countryOBJ[getRandomINT250()].name
//                 return randomCountry
//             } else if (e.target.readyState === 4) {
//                 console.log('server Error')
//             }
//         })
//     }

const getPuzzlePromise = () => new Promise((resolve, reject) => {
    const req = new XMLHttpRequest
    req.open('GET', "https://restcountries.eu/rest/v2/all")
    req.send()
    var countryJSON
    var countryOBJ
    var randomCountry
    req.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            countryJSON = req.responseText
            countryOBJ = JSON.parse(countryJSON)
            randomCountry = countryOBJ[getRandomINT250()].name
            resolve(randomCountry)
        } else if (e.target.readyState === 4) {
            reject('error has occured')
        }
    })
})

const getPuzzleFetchPromise = () => {
    return fetch("https://restcountries.eu/rest/v2/all", {}).then((response) => {
        var countryJSON
        var countryOBJ
        var randomCountry
        if (response.status === 200){
        countryJSON = req.responseText
        countryOBJ = JSON.parse(countryJSON)
        randomCountry = countryOBJ[getRandomINT250()].name
            return randomCountry
        }
        else {
             throw new Error('couldnt fetch DATA')
        }
    })
}

