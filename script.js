document.addEventListener('DOMContentLoaded', () => {
    const tvs = document.querySelectorAll('.tv');
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']; // Colors for 6 TVs
    const indices = shuffle([...Array(tvs.length).keys()]);

    // Assign functionalities based on shuffled indices
    indices.slice(0, 6).forEach((index, i) => assignColorTV(tvs[index], colors[i]));
    indices.slice(6, 12).forEach((index, i) => assignNumberTV(tvs[index], i + 1));
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
        clickCount++;
        if (clickCount === 1) screen.style.backgroundColor = 'white';
        else if (clickCount === 2) screen.style.backgroundColor = color;
        else {
            screen.style.backgroundColor = '';
            clickCount = 0; // Reset for cycling
        }
    });
}

function assignNumberTV(tv, number) {
    let clickCount = 0;
    tv.addEventListener('click', () => {
        const screen = tv.querySelector('.screen');
        clickCount++;
        if (clickCount === 1) {
            screen.style.backgroundColor = 'white';
            screen.textContent = number; // Display the number
        } else {
            screen.style.backgroundColor = '';
            screen.textContent = ''; // Clear the number
            clickCount = 0; // Reset for cycling
        }
    });
}

function assignWhiteTV(tv) {
    tv.addEventListener('click', () => {
        const screen = tv.querySelector('.screen');
        if (screen.style.backgroundColor === 'white') {
            screen.style.backgroundColor = '';
        } else {
            screen.style.backgroundColor = 'white';
        }
    });
}
