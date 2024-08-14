document.addEventListener('DOMContentLoaded', () => {
    const redbox = document.getElementById("red");
    const bluebox = document.getElementById("blue");
    const greenbox = document.getElementById("green");
    const yellowbox = document.getElementById("yellow");
    const span = document.getElementById("name");
    const button = document.getElementById("btn");
    const nameInput = document.getElementById("nameIN");

    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        const name = nameInput.value.trim();
        if (name) {
            span.textContent = `, ${name}`;
        } else {
            span.textContent = '';
        }
    });

    // Event listeners for changing box colors
    redbox.addEventListener("click", () => {
        redbox.style.backgroundColor = 'red';
    });

    bluebox.addEventListener("click", () => {
        bluebox.style.backgroundColor = 'blue';
    });

    greenbox.addEventListener("click", () => {
        greenbox.style.backgroundColor = 'green';
    });

    yellowbox.addEventListener("click", () => {
        yellowbox.style.backgroundColor = 'yellow';
    });
});
