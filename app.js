var game1
//fetching random words from server & setting up the game with words
const r = new XMLHttpRequest
var rDataJSON
var obj
r.open('GET', 'http://puzzle.mead.io/puzzle')
r.send()
r.addEventListener('readystatechange', (e) => {
    //check if server is ok
    if (e.target.readyState == 4 ) {
        console.log('conn OK')
        rDataJSON = r.responseText
        obj = JSON.parse(rDataJSON)
        console.log(obj.puzzle)
        game1 = new Hangman(obj.puzzle, 5)
        document.getElementById('guessesRemaining').textContent = game1.remainingGuesses
        game1.Puzzle
    }
    if(e.target.readyState != 4){
        console.log('error with server')
    }
})


//rendering letter on screen
const renderLetterButtons = function () {
    for (i = 65; i < 91; i++) {
        const button = document.createElement('button')
        let c = String.fromCharCode(i).toLowerCase()
        button.textContent = c
        // button.setAttribute('id', c)
        document.querySelector('#buttonSpace').appendChild(button)
        button.addEventListener('click', function () {
            button.disabled = true
            game1.makeGuess(c)
            game1.Puzzle
            game1.GameStatus

        })
    }
}()

//pressing buttons
// window.addEventListener('keypress', function(e){
//     pressedLetter = ''

//     if(e.charCode>=97 && e.charCode<=122){
//         pressedLetter = String.fromCharCode(e.charCode)
//         game1.makeGuess(pressedLetter)
//         console.log(pressedLetter)
//         console.log(game1.getPuzzle())
//     }
// })
