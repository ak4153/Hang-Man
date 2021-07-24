class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.GuessedLetters = []
    }

    //renders puzzle
    get Puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.GuessedLetters.includes(letter)) {
                puzzle += letter
                document.querySelector('#word').textContent = puzzle
            }
            if (letter == ' ')
                puzzle += ' '
            if (!this.GuessedLetters.includes(letter) && letter != ' ') {
                puzzle += '*'
                document.querySelector('#word').textContent = puzzle
            }
        })
        return puzzle
    }

    get GameStatus() {
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
    makeGuess(guess) {
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

}
