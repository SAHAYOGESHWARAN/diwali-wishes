document.addEventListener("DOMContentLoaded", function() {
    const wishInput = document.getElementById("wish-input");
    const wishList = document.getElementById("wish-list");
    const addWishBtn = document.getElementById("add-wish-btn");
    const themeSwitch = document.getElementById("theme-switch");

    // Load saved wishes from localStorage
    const savedWishes = JSON.parse(localStorage.getItem("wishes")) || [];
    savedWishes.forEach(addWishToList);

    // Load and set the dark mode state
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        themeSwitch.checked = true;
    }

    // Add a wish
    addWishBtn.addEventListener("click", () => {
        const wish = wishInput.value.trim();
        if (wish) {
            addWishToList(wish);
            saveWish(wish);
            wishInput.value = '';
        }
    });

    // Add wish to the DOM
    function addWishToList(wish) {
        const li = document.createElement("li");
        li.textContent = wish;
        li.classList.add("list-group-item");
        wishList.appendChild(li);
    }

    // Save wish to localStorage
    function saveWish(wish) {
        savedWishes.push(wish);
        localStorage.setItem("wishes", JSON.stringify(savedWishes));
    }

    // Dark mode toggle
    themeSwitch.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
        // Persist dark mode in localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
