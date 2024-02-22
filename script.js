document.addEventListener('DOMContentLoaded', () => {
    const tvs = document.querySelectorAll('.tv');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']; // Colors for 6 TVs
    let indices = Array.from(Array(tvs.length).keys()); // Create an array of indices [0, 1, 2, ..., 34]

    shuffleArray(indices); // Shuffle the array of indices to randomly distribute functionalities

    // Assign functionalities based on the shuffled indices
    // First 6 indices for colored TVs
    indices.slice(0, 6).forEach((index, i) => {
        assignColorFunctionality(tvs[index], colors[i]);
    });

    // Next 6 indices for TVs with numbers
    indices.slice(6, 12).forEach((index, i) => {
        assignNumberFunctionality(tvs[index], i + 1); // Numbers 1-6
    });

    // Remaining TVs for white-only functionality
    indices.slice(12).forEach(index => {
        assignWhiteFunctionality(tvs[index]);
    });
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function assignColorFunctionality(tv, color) {
    tv.addEventListener('click', function() {
        const screen = this.querySelector('.screen');
        toggleScreen(screen, ['white', color]);
    });
}

function assignNumberFunctionality(tv, number) {
    const screen = tv.querySelector('.screen');
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('screen-number');
    numberDiv.textContent = number;
    screen.appendChild(numberDiv);

    tv.addEventListener('click', function() {
        toggleScreen(screen, ['white'], numberDiv);
    });
}

function assignWhiteFunctionality(tv) {
    tv.addEventListener('click', function() {
        const screen = this.querySelector('.screen');
        toggleScreen(screen, ['white']);
    });
}

function toggleScreen(screen, states, numberDiv = null) {
    let nextState = states[0]; // Default to the first state
    if (screen.classList.contains('white') && states.length > 1) {
        nextState = states[1];
    } else if (screen.classList.contains(states[1])) {
        nextState = ''; // Turn off the screen
    }
    
    screen.className = 'screen'; // Reset classes
    if (nextState) {
        screen.classList.add(nextState);
    }
    if (numberDiv) {
        numberDiv.style.display = nextState === 'white' ? 'block' : 'none';
    }
}
