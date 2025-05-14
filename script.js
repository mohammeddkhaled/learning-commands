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

// Add copy-to-clipboard functionality
const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const command = button.getAttribute('data-command');
    navigator.clipboard.writeText(command).then(() => {
      alert(`Copied to clipboard: ${command}`);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  });
});
