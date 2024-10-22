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

document.addEventListener("DOMContentLoaded", function() {
    const wishInput = document.getElementById("wish-input");
    const wishList = document.getElementById("wish-list");
    const addWishBtn = document.getElementById("add-wish-btn");

    // Load saved wishes from localStorage
    const savedWishes = JSON.parse(localStorage.getItem("wishes")) || [];
    savedWishes.forEach(addWishToList);

    // Add a wish
    addWishBtn.addEventListener("click", () => {
        const wish = wishInput.value.trim();
        if (wish) {
            addWishToList(wish);
            saveWish(wish);
            wishInput.value = '';
        }
    });

    function addWishToList(wish) {
        const li = document.createElement("li");
        li.textContent = wish;
        li.classList.add("list-group-item");
        wishList.appendChild(li);
    }

    function saveWish(wish) {
        savedWishes.push(wish);
        localStorage.setItem("wishes", JSON.stringify(savedWishes));
    }
});

const toggleSwitch = document.querySelector('#theme-switch');

toggleSwitch.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});
