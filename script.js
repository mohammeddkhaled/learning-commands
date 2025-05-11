// Add interactivity to list items
const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    // Highlight the clicked item
    listItems.forEach(li => li.style.backgroundColor = ''); // Reset others
    item.style.backgroundColor = '#d0e6f7';

    // Display additional information (example: alert)
    alert(`You clicked on: ${item.textContent}`);
  });
});