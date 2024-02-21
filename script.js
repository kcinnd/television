document.addEventListener('DOMContentLoaded', () => {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
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
