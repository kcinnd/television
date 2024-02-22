document.addEventListener('DOMContentLoaded', () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']; // 6 colors for the colored TVs
    const tvs = document.querySelectorAll('.tv');

    // Shuffle the array of TV elements
    let shuffledTvs = shuffleArray([...tvs]);

    // Assign a unique color and the 'color-tv' class to the first 6 shuffled TVs
    // Also, assign numbers 1-6 to their screens
    for (let i = 0; i < 6; i++) {
        shuffledTvs[i].classList.add('color-tv');
        assignColorAndClickEvent(shuffledTvs[i], colors[i], i + 1); // Pass the number to be displayed
    }

    // Function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    }

    // Function to assign color, number, and add click event to a TV
    function assignColorAndClickEvent(tv, color, number) {
        const screen = tv.querySelector('.screen');
        tv.setAttribute('data-click-state', 'off'); // Initialize click state

        // Create and append the number div
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('screen-number');
        numberDiv.textContent = number; // Set the number text
        screen.appendChild(numberDiv);

        tv.addEventListener('click', () => {
            let clickState = tv.getAttribute('data-click-state');

            switch (clickState) {
                case 'off':
                    screen.className = 'screen white-glow';
                    numberDiv.style.display = 'block'; // Show the number
                    tv.setAttribute('data-click-state', 'white');
                    break;
                case 'white':
                    screen.className = 'screen ' + color + '-glow';
                    numberDiv.style.display = 'none'; // Hide the number
                    tv.setAttribute('data-click-state', 'color');
                    break;
                case 'color':
                    screen.className = 'screen';
                    tv.setAttribute('data-click-state', 'off');
                    break;
            }
        });
    }

    // Event listeners for the remaining TVs (white-only functionality)
    tvs.forEach(tv => {
        if (!tv.classList.contains('color-tv')) {
            tv.addEventListener('click', () => {
                const screen = tv.querySelector('.screen');
                if (screen.style.backgroundColor === 'white') {
                    screen.className = 'screen';
                } else {
                    screen.className = 'screen white-glow';
                }
            });
        }
    });
});
