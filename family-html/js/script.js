const members = [
    {
        name: "Euge",
        eye_color: "Brown",
        hair_color: "Black",
        theme_color: "#000000"
    },
    {
        name: "Soo",
        eye_color: "Blue",
        hair_color: "Blonde",
        theme_color: "#00FF00"
    },
    {
        name: "Geo",
        eye_color: "Green",
        hair_color: "Brown",
        theme_color: "#0000FF"
    }
];

const eyeColors = ["Black", "Brown", "Blue", "Green", "Hazel", "Gray", "Amber", "Violet"];
const hairColors = ["Black", "Brown", "Blonde", "Red", "Gray", "White", "Auburn", "Strawberry blonde"];

// Get the elements from the DOM
const eyeColorSelect = document.getElementById("eye-color-select");
const hairColorSelect = document.getElementById("hair-color-select");
const eyeColorSpan = document.getElementById("eye-color");
const hairColorSpan = document.getElementById("hair-color");
const editButton = document.querySelector(".edit-button");
const editSection = document.querySelector(".edit-section");
const saveButton = document.querySelector(".save-button");
const backButton = document.querySelector(".back-button");

// Add event listeners to the elements
editButton.addEventListener("click", showEditSection);
saveButton.addEventListener("click", saveChanges);
backButton.addEventListener("click", goBack);

// Function to show the edit section
function showEditSection() {
    editSection.style.display = "block";
}

// Function to save the changes
function saveChanges() {
    const newEyeColor = eyeColorSelect.value;
    const newHairColor = hairColorSelect.value;

    // Update the member's information
    members[0].eye_color = newEyeColor;
    members[0].hair_color = newHairColor;

    // Update the DOM
    eyeColorSpan.textContent = newEyeColor;
    hairColorSpan.textContent = newHairColor;

    // Hide the edit section
    editSection.style.display = "none";
}

// Function to go back to the home page
function goBack() {
    window.location.href = "../index.html";
}

// Create the options for the eye color select element
for (let i = 0; i < eyeColors.length; i++) {
    const option = document.createElement("option");
    option.value = eyeColors[i];
    option.textContent = eyeColors[i];
    eyeColorSelect.appendChild(option);
}

// Create the options for the hair color select element
for (let i = 0; i < hairColors.length; i++) {
    const option = document.createElement("option");
    option.value = hairColors[i];
    option.textContent = hairColors[i];
    hairColorSelect.appendChild(option);
}