document.addEventListener('DOMContentLoaded', () => {
    const tvs = document.querySelectorAll('.tv');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']; // Colors for 6 TVs
    let indices = shuffle([...Array(tvs.length).keys()]); // Shuffle indices for random assignment

    // Assign color functionality to the first 6 TVs
    indices.slice(0, 6).forEach((index, i) => assignColorTV(tvs[index], colors[i]));

    // Assign number functionality to the next 6 TVs
    indices.slice(6, 12).forEach((index, i) => assignNumberTV(tvs[index], i + 1));

    // Assign white functionality with intense glow to the remaining TVs
    indices.slice(12).forEach(index => assignWhiteTV(tvs[index]));
});

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function assignColorTV(tv, color) {
    let clickCount = 0;
    tv.addEventListener('click', () => {
        const screen = tv.querySelector('.screen');
        clickCount = (clickCount + 1) % 3; // Cycle through 0 (off), 1 (white glow), 2 (color glow)
        updateScreen(screen, clickCount, color);
    });
}

function assignNumberTV(tv, number) {
    let clickCount = 0;
    const screen = tv.querySelector('.screen');
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('screen-number', 'hidden');
    numberDiv.textContent = number;
    screen.appendChild(numberDiv);

    tv.addEventListener('click', () => {
        clickCount = (clickCount + 1) % 3; // Cycle through 0 (off), 1 (white glow), 2 (white glow with number)
        updateScreen(screen, clickCount, 'white', numberDiv);
    });
}

function assignWhiteTV(tv) {
    tv.addEventListener('click', () => {
        const screen = tv.querySelector('.screen');
        screen.classList.toggle('white-glow'); // Toggle white glow
        screen.classList.remove('color-glow'); // Ensure color glow is removed if present
    });
}

function updateScreen(screen, clickCount, color = null, numberDiv = null) {
    screen.className = 'screen'; // Reset classes
    if (clickCount === 1) {
        screen.classList.add('white-glow'); // First click: white glow
        if (numberDiv) numberDiv.classList.add('hidden'); // Hide number if present
    } else if (clickCount === 2) {
        if (color) screen.classList.add(`${color}-glow`); // Second click for colored TVs: color glow
        if (numberDiv) numberDiv.classList.remove('hidden'); // Show number for numbered TVs
    }
}

// Additional CSS for the hidden class and glow effects
.hidden { display: none; }
.white-glow { background-color: white; box-shadow: 0 0 20px 10px white; } // Intense white glow
.color-glow { box-shadow: 0 0 20px 10px; } // Placeholder for color glow, actual color set in JS
