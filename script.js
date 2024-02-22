document.addEventListener('DOMContentLoaded', () => {
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

  // Function to shuffle the colors array
 function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(colors);

  // Click event for the first 7 color TVs
  document.querySelectorAll('.color-tv').forEach((tv, index) => {
    tv.setAttribute('data-click-state', 0);

    tv.addEventListener('click', () => {
      const screen = tv.querySelector('.screen');
      let clickState = parseInt(tv.getAttribute('data-click-state'));

      // Cycling through white glow, specific color, and off
      switch (clickState) {
        case 0:
          screen.style.background = 'white';
          screen.style.boxShadow = '0 0 15px white';
          break;
        case 1:
          screen.style.background = colors[index % colors.length];
          screen.style.boxShadow = `0 0 15px ${colors[index % colors.length]}`;
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

  // Click event for the remaining TVs
  document.querySelectorAll('.tv:not(.color-tv)').forEach(tv => {
    tv.setAttribute('data-click-state', 0);

    tv.addEventListener('click', () => {
      const screen = tv.querySelector('.screen');
      let clickState = parseInt(tv.getAttribute('data-click-state'));

      // Cycling through white glow and off
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
  });
});
