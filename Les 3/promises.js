let number = Math.floor(Math.random() * 21);
console.log(number);



let guess = document.getElementById('guessNumber').addEventListener('click');
console.log(guess);

let compare = new Promise(compareNumber(resolve, reject) {


})

compare.then(result => {
        alert(result)
        if (number < guess) {
            console.log('The mystery number is higher. Guess again!')
        };
        if (number > guess) {
            console.log('The mystery number is lower. Guess again!')
        };
        if (number == guess) {
            console.log('You have guessed the mystery number!')
        };
    },
    reject => {
        alert(reject)
    }
)