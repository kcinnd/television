document.addEventListener('DOMContentLoaded', () => {
  let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }

  // Shuffle the colors array for random assignment
  shuffleArray(colors);
  document.querySelectorAll('.tv').forEach((tv, index) => {
    tv.addEventListener('click', () => {
      const screen = tv.querySelector('.screen');
      // Check if the screen already has the color class
      if (screen.classList.contains(colors[index % colors.length])) {
        screen.className = 'screen'; // Reset to just 'screen' class to turn it back to black
      } else {
        screen.className = 'screen'; // Reset classes
        screen.classList.add(colors[index % colors.length]); // Add the specific color class
      }
    });
  });
});
