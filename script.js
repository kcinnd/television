document.addEventListener('DOMContentLoaded', () => {
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'pink'];

  // Function to shuffle the colors array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }

  // Shuffle the colors array for random assignment
  shuffleArray(colors);

  // Set up click event listeners for each TV
  document.querySelectorAll('.tv').forEach((tv, index) => {
    tv.setAttribute('data-click-state', 0); // Initialize click state

    tv.addEventListener('click', () => {
      const screen = tv.querySelector('.screen');
      let clickState = parseInt(tv.getAttribute('data-click-state'));

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

      clickState = (clickState + 1) % 3; // Update click state
      tv.setAttribute('data-click-state', clickState);
    });
  });
});
