document.addEventListener('DOMContentLoaded', () => {
    const tvs = document.querySelectorAll('.tv');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']; // Colors for 6 TVs
    let indices = Array.from({ length: tvs.length }, (_, index) => index);

    shuffleArray(indices); // Shuffle the indices to randomly assign functionalities

    // Assign color functionality to the first 6 TVs
    indices.slice(0, 6).forEach((index, i) => {
        assignColorFunctionality(tvs[index], colors[i]);
    });

    // Assign number functionality to the next 6 TVs
    indices.slice(6, 12).forEach((index, i) => {
        assignNumberFunctionality(tvs[index], i + 1); // Numbers 1-6
    });

    // Assign white functionality to the remaining TVs
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
    let state = 0; // 0: off, 1: white, 2: color
    tv.addEventListener('click', () => {
        const screen = tv.querySelector('.screen');
        state = (state + 1) % 3;
        screen.className = 'screen'; // Reset class
        if (state === 1) screen.classList.add('white');
        else if (state === 2) screen.classList.add(color);
    });
}

function assignNumberFunctionality(tv, number) {
    let state = 0; // 0: off, 1: white (with number)
    const screen = tv.querySelector('.screen');
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('screen-number');
    numberDiv.textContent = number;
    screen.appendChild(numberDiv);
    numberDiv.style.display = 'none';

    tv.addEventListener('click', () => {
        state = (state + 1) % 2;
        screen.className = 'screen'; // Reset class
        if (state === 1) {
            screen.classList.add('white');
            numberDiv.style.display = 'block';
        } else {
            numberDiv.style.display = 'none';
        }
    });
}

function assignWhiteFunctionality(tv) {
    let state = 0; // 0: off, 1: white
    tv.addEventListener('click', () => {
        const screen = tv.querySelector('.screen');
        state = (state + 1) % 2;
        screen.className = 'screen'; // Reset class
        if (state === 1) screen.classList.add('white');
    });
}
