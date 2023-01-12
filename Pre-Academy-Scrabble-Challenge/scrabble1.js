class Scrabble {
    constructor(str) {
        if (str == null) {
            this.str = ""
        } else {
            this.str = str.toUpperCase()
        }
    }
    score() {
        let score = 0
        let level1 = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]
        let level2 = ["D", "G"]
        let level3 = ["B", "C", "M", "P"]
        let level4 = ["F", "H", "V", "W", "Y"]
        let level5 = ["K"]
        let level6 = ["J", "X"]
        let level7 = ["Q", "Z"]
        for (let i = 0; i < this.str.length; i++) {
            if (level1.includes(this.str[i])) {
                score += 1
            } else if (level2.includes(this.str[i])) {
                score += 2
            } else if (level3.includes(this.str[i])) {
                score += 3
            } else if (level4.includes(this.str[i])) {
                score += 4
            } else if (level5.includes(this.str[i])) {
                score += 5
            } else if (level6.includes(this.str[i])) {
                score += 8
            } else if (level7.includes(this.str[i])) {
                score += 10
            }
        }

        console.log(score)
        return score
    }
}
let letters = window.prompt("Enter a word: ");
alert(score);

