console.log('hi');

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') return userInput;
    console.log('Error: Invaild choice.')
};

const getComputerChoice = () => {
    const rng = Math.floor(Math.random()*3);

    switch (rng) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break
        default:
            return 'scissors';
            break;
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return 'The game was a tie.';
    
    if (userChoice === 'rock') return computerChoice === 'scissors' ? 'Congratulations - You win!' : 'You Lose - Better luck next time!';

    if (userChoice === 'paper') return computerChoice === 'rock' ? 'Congratulations - You win!' : 'You Lose - Better luck next time!';

    if (userChoice === 'scissors') return computerChoice === 'paper' ? 'Congratulations - You win!' : 'You Lose - Better luck next time!';

    if (userChoice === 'bomb') return 'Congratulations - You win!'
};

const playGame = (input) => {
    const userChoice = getUserChoice(input);
    const computerChoice = getComputerChoice();
    console.log(`User: ${userChoice}. Computer: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame('rock');