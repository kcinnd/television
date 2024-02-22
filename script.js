document.addEventListener('DOMContentLoaded', () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    const tvs = document.querySelectorAll('.tv');

    // Shuffle the array of TV elements
    let shuffledTvs = shuffleArray([...tvs]);

    // Assign a unique color and the 'color-tv' class to the first 7 shuffled TVs
    for (let i = 0; i < 6; i++) {
        shuffledTvs[i].classList.add('color-tv');
        assignColorAndClickEvent(shuffledTvs[i], colors[i]);
    }

    // Function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    }

    // Function to assign color and add click event to a TV
    function assignColorAndClickEvent(tv, color) {
        const screen = tv.querySelector('.screen');
        tv.setAttribute('data-click-state', 'off'); // Initialize click state

        tv.addEventListener('click', () => {
            const currentState = tv.getAttribute('data-click-state');

            switch (currentState) {
                case 'off':
                    screen.style.backgroundColor = 'white';
                    screen.style.boxShadow = '0 0 20px 10px white';
                    tv.setAttribute('data-click-state', 'white');
                    break;
                case 'white':
                    screen.style.backgroundColor = color;
                    screen.style.boxShadow = `0 0 20px 10px ${color}`;
                    tv.setAttribute('data-click-state', 'color');
                    break;
                case 'color':
                    screen.style.backgroundColor = '';
                    screen.style.boxShadow = '';
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
                // Toggle white glow and off
                if (screen.style.backgroundColor === 'white') {
                    screen.style.backgroundColor = '';
                    screen.style.boxShadow = '';
                } else {
                    screen.style.backgroundColor = 'white';
                    screen.style.boxShadow = '0 0 15px white';
                }
            });
        }
    });
});
