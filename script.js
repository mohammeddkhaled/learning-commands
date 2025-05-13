// Add interactivity to list items
const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
  const details = item.querySelector('.details');
  item.addEventListener('click', () => {
    // Highlight the clicked item
    listItems.forEach(li => li.style.backgroundColor = ''); // Reset others
    item.style.backgroundColor = '#d0e6f7';

    // Toggle visibility of details
    if (details.style.display === 'none') {
      details.style.display = 'block';
    } else {
      details.style.display = 'none';
    }
  });
});

// Search functionality
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('input', () => {
  const searchText = searchBar.value.toLowerCase();

  listItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchText)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});

