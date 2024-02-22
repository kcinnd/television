document.addEventListener('DOMContentLoaded', () => {
    const tvs = document.querySelectorAll('.tv');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']; // Colors for 6 TVs
    let indices = shuffle([...Array(tvs.length).keys()]); // Shuffle indices for random assignment

    // Assign functionalities based on shuffled indices
    // First 6 for color change functionality
    indices.slice(0, 6).forEach((index, i) => {
        assignColorFunctionality(tvs[index], colors[i]);
    });

    // Next 6 for number display functionality
    indices.slice(6, 12).forEach((index, i) => {
        assignNumberFunctionality(tvs[index], i + 1); // Numbers 1-6
    });

    // Remaining for white screen functionality
    indices.slice(12).forEach(index => {
        assignWhiteFunctionality(tvs[index]);
    });
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function assignColorFunctionality(tv, color) {
    tv.addEventListener('click', function() {
        const screen = this.querySelector('.screen');
        cycleState(screen, ['white-glow', `${color}-glow`]);
    });
}

function assignNumberFunctionality(tv, number) {
    const screen = tv.querySelector('.screen');
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('screen-number');
    numberDiv.textContent = number;
    screen.appendChild(numberDiv);
    numberDiv.style.display = 'none'; // Initially hide the number

    tv.addEventListener('click', function() {
        const isNumberVisible = numberDiv.style.display !== 'none';
        cycleState(screen, ['white-glow'], isNumberVisible ? null : numberDiv);
    });
}

function assignWhiteFunctionality(tv) {
    tv.addEventListener('click', function() {
        const screen = this.querySelector('.screen');
        cycleState(screen, ['white-glow']);
    });
}

function cycleState(screen, states, numberDiv = null) {
    const currentState = screen.dataset.state;
    const nextStateIndex = states.indexOf(currentState) + 1 === states.length ? 0 : states.indexOf(currentState) + 1;
    const nextState = states[nextStateIndex];

    screen.dataset.state = nextState; // Update the state
    screen.className = 'screen'; // Reset screen classes
    if (nextState) {
        screen.classList.add(nextState); // Apply the next state class
        if (numberDiv && nextState === 'white-glow') {
            numberDiv.style.display = 'block'; // Show number on white screen
        } else if (numberDiv) {
            numberDiv.style.display = 'none'; // Hide number otherwise
        }
    }
}
