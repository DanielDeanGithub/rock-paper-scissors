console.log('hi');

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') return userInput;
    console.log('Error: Invaild choice.')
};

const getComputerChoice = () => {
    const rng = Math.floor(Math.random()*3);

    switch (rng) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper'
            break
        default:
            return 'scissors'
            break;
    }
}