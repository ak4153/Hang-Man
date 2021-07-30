
var c
var game1
const gameStart = async () => {
    const puzzle = await getPuzzlePromise()
    game1 = new Hangman(puzzle, 5)
    document.getElementById('guessesRemaining').textContent = game1.remainingGuesses
    game1.Puzzle
}
gameStart()

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

