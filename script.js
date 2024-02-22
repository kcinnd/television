document.addEventListener('DOMContentLoaded', () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
    const tvs = document.querySelectorAll('.tv');

    // Shuffle the array of TV elements
    let shuffledTvs = shuffleArray([...tvs]);

    // Assign a unique color and the 'color-tv' class to the first 7 shuffled TVs
    for (let i = 0; i < 7; i++) {
        shuffledTvs[i].classList.add('color-tv');
        assignColor(shuffledTvs[i], colors[i]);
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
    function assignColor(tv, color) {
        const screen = tv.querySelector('.screen');

        tv.addEventListener('click', () => {
            // Toggle color on click
            if (screen.style.backgroundColor === color) {
                screen.style.backgroundColor = '';
                screen.style.boxShadow = '';
            } else {
                screen.style.backgroundColor = color;
                screen.style.boxShadow = `0 0 15px ${color}`;
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
