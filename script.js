document.addEventListener("DOMContentLoaded", function() {
    const comingSoonElements = document.querySelectorAll(".coming-soon");

    comingSoonElements.forEach(element => {
        element.addEventListener("click", function() {
            alert("Coming soon!");
        });
    });
});
