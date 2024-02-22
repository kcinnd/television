document.addEventListener('DOMContentLoaded', () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']; // Colors for the first 6 colored TVs
    const tvs = document.querySelectorAll('.tv');

    // Assign colors to the first 6 TVs
    for (let i = 0; i < 6; i++) {
        assignColor(tvs[i], colors[i]);
    }

    // Assign numbers to the next 6 TVs
    for (let i = 6; i < 12; i++) {
        assignNumber(tvs[i], i - 5); // Numbers 1-6
    }

    // The rest of the TVs only turn white
    for (let i = 12; i < tvs.length; i++) {
        assignWhiteOnly(tvs[i]);
    }
});

function assignColor(tv, color) {
    let clickState = 0; // 0: off, 1: white, 2: color

    tv.addEventListener('click', () => {
        const screen = tv.querySelector('.screen');
        clickState = (clickState + 1) % 3;
        updateScreen(screen, clickState, color);
    });
}

function assignNumber(tv, number) {
    let clickState = 0; // 0: off, 1: white, 2: number
    const screen = tv.querySelector('.screen');
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('screen-number');
    numberDiv.textContent = number;
    screen.appendChild(numberDiv);

    tv.addEventListener('click', () => {
        clickState = (clickState + 1) % 3;
        updateScreen(screen, clickState, null, numberDiv);
    });
}

function assignWhiteOnly(tv) {
    let clickState = 0; // 0: off, 1: white

    tv.addEventListener('click', () => {
        const screen = tv.querySelector('.screen');
        clickState = (clickState + 1) % 2;
        updateScreen(screen, clickState);
    });
}

function updateScreen(screen, state, color = null, numberDiv = null) {
    switch (state) {
        case 0: // Off
            screen.style.backgroundColor = '';
            screen.style.boxShadow = '';
            if (numberDiv) numberDiv.style.display = 'none';
            break;
        case 1: // White
            screen.style.backgroundColor = 'white';
            screen.style.boxShadow = '0 0 20px 10px white';
            if (numberDiv) numberDiv.style.display = 'block';
            break;
        case 2: // Color or Number
            if (color) {
                screen.style.backgroundColor = color;
                screen.style.boxShadow = `0 0 20px 10px ${color}`;
            } else if (numberDiv) {
                screen.style.backgroundColor = ''; // Or any background color you want for the number state
                screen.style.boxShadow = 'none';
                numberDiv.style.display = 'none'; // Hide the number again
            }
            break;
    }
}
