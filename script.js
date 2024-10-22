// Add event listener to the button
document.getElementById('add-wish-btn').addEventListener('click', function() {
    // Get the value from the text area
    let wish = document.getElementById('wish-input').value;

    // Check if the wish is not empty
    if (wish.trim() !== "") {
        // Create a new list item
        let listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = wish;

        // Add the list item to the wish list
        document.getElementById('wish-list').appendChild(listItem);

        // Clear the input field
        document.getElementById('wish-input').value = "";
    }
});
