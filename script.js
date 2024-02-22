document.addEventListener('DOMContentLoaded', () => {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
  const tvs = document.querySelectorAll('.tv');

  // Randomly assign 'color-tv' class to 7 out of 35 TVs
  const shuffledIndices = shuffleArray([...Array(tvs.length).keys()]).slice(0, 7);

  shuffledIndices.forEach(index => {
    tvs[index].classList.add('color-tv');
  });

  // Function to shuffle an array and return a new array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  // Click event for color TVs
  document.querySelectorAll('.color-tv').forEach((tv, index) => {
    tv.setAttribute('data-click-state', 0);

    tv.addEventListener('click', () => {
      const screen = tv.querySelector('.screen');
      let clickState = parseInt(tv.getAttribute('data-click-state'));

      switch (clickState) {
        case 0:
          screen.style.background = 'white';
          screen.style.boxShadow = '0 0 15px white';
          break;
        case 1:
          // Use shuffledIndices[index] to get the correct color
          const colorIndex = shuffledIndices[index];
          screen.style.background = colors[colorIndex % colors.length];
          screen.style.boxShadow = `0 0 15px ${colors[colorIndex % colors.length]}`;
          break;
        case 2:
          screen.style.background = '#000';
          screen.style.boxShadow = 'none';
          break;
      }

      clickState = (clickState + 1) % 3;
      tv.setAttribute('data-click-state', clickState);
    });
  });

  // Click event for the remaining TVs (white-only functionality)
  tvs.forEach(tv => {
    if (!tv.classList.contains('color-tv')) {
      tv.setAttribute('data-click-state', 0);

      tv.addEventListener('click', () => {
        const screen = tv.querySelector('.screen');
        let clickState = parseInt(tv.getAttribute('data-click-state'));

        switch (clickState) {
          case 0:
            screen.style.background = 'white';
            screen.style.boxShadow = '0 0 15px white';
            break;
          case 1:
            screen.style.background = '#000';
            screen.style.boxShadow = 'none';
            break;
        }

        clickState = (clickState + 1) % 2; // Two states for non-color TVs
        tv.setAttribute('data-click-state', clickState);
      });
    }
  });
});
