const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.GuessedLetters = []
}
Hangman.prototype.getGameStatus = function () {
    //if playing status OK
    if (this.remainingGuesses >= 0 && document.getElementById('word').textContent.includes('*'))
        document.getElementById('status').textContent = 'status:OK'
    //if ranout of attempts status GAMEOVER
    if (this.remainingGuesses < 0 && document.getElementById('word').textContent.includes('*')) {
        document.getElementById('status').textContent = `status: GAMEOVER
     the word was ${ this.word.join('')}` 

    document.querySelectorAll('button').forEach((b) => {
        b.setAttribute('disabled', '')
    })
}
//if guessed all GOODJOB
if (this.remainingGuesses >= 0 && !document.getElementById('word').textContent.includes('*')) {
    document.querySelectorAll('button').forEach((b) => {
        b.setAttribute('disabled', '')
        document.getElementById('status').textContent = 'status:GOODJOB'
    })
}

}

Hangman.prototype.makeGuess = function (guess) {
    if (this.remainingGuesses < 0)
        return console.log('no more attempts')

    if (this.GuessedLetters.includes(guess))
        return console.log('letter already Exists')

    else {
        this.GuessedLetters.push(guess)
        if (this.word.includes(guess)) {
            console.log(`${guess}: is correct`)
        }
        else {
            this.remainingGuesses--
            document.getElementById('guessesRemaining').textContent = this.remainingGuesses
            console.log(`${guess}: isn't correct`)
        }
    }
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach((letter) => {
        if (this.GuessedLetters.includes(letter)) {
            puzzle += letter
            document.querySelector('#word').textContent = puzzle
        }
        else {
            puzzle += '*'
            document.querySelector('#word').textContent = puzzle
        }
    })
    return puzzle
}

