(function () {
    const buttons = document.querySelectorAll(".btn-counter");
    let count = 0;

    const counter = document.querySelector(".counter"); // Fixed selector
    const counterContainer = document.querySelector(".counter"); // Ensure it's correct

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            if (button.classList.contains("decrease-btn")) {
                count--;
            } 
            else if (button.classList.contains("increase-btn")) { 
                count++;
            }

            counter.textContent = count;

            // Update counter colors
            if (count > 0) {
                counterContainer.classList.add("positive");
                counterContainer.classList.remove("negative");
            } 
            else if (count < 0) {
                counterContainer.classList.add("negative");
                counterContainer.classList.remove("positive");
            } 
            else {
                counterContainer.classList.remove("positive", "negative"); // Reset styles if count is 0
            }
        });
    });
})();
