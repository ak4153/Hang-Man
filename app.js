game1 = new Hangman('cat', 5)
document.getElementById('guessesRemaining').textContent = game1.remainingGuesses
game1.getPuzzle()

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
            game1.getPuzzle()
            game1.getGameStatus()
            
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
