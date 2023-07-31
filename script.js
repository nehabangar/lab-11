// Create references to the required elements
const shoppingList = document.getElementById('shoppingList');
const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');

// Function to add a new item to the list
function addItemToList() {
  // Get the current value of the input element
  const newItemValue = itemInput.value.trim();

  // If the input is empty, do nothing
  if (newItemValue === '') {
    return;
  }

  // Empty the input element
  itemInput.value = '';

  // Create new elements for the list item, span, and delete button
  const listItem = document.createElement('li');
  const itemText = document.createElement('span');
  const deleteButton = document.createElement('button');

  // Set the text content for the span and delete button
  itemText.textContent = newItemValue;
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'deleteButton';

  // Append the span and delete button to the list item
  listItem.appendChild(itemText);
  listItem.appendChild(deleteButton);

  // Append the list item to the shopping list
  shoppingList.appendChild(listItem);

  // Add event listener to the delete button to remove the list item when clicked
  deleteButton.addEventListener('click', function () {
    shoppingList.removeChild(listItem);
  });

  // Focus on the input element for the next item
  itemInput.focus();
}

// Add event listener to the "Add Item" button
addItemButton.addEventListener('click', addItemToList);

// Add event listener to the input element to handle adding items on pressing Enter key
itemInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addItemToList();
  }
});
