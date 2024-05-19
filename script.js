const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const passToggleBtn = document.getElementById("pass-toggle-btn");
const countryInput = document.getElementById("country");
const agreeCheckbox = document.getElementById("agree");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to remove error messages
const removeError = (field) => {
    field.classList.remove("error");
    const errorText = field.closest(".form-group").querySelector(".error-text");
    if (errorText) {
        errorText.remove();
    }
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Check if each field is filled
    if (passwordInput.value.trim() === "") {
        showError(passwordInput, "Enter your password");
    } else {
        removeError(passwordInput);
    }

    if (confirmPasswordInput.value.trim() === "") {
        showError(confirmPasswordInput, "Confirm your password");
    } else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
        showError(confirmPasswordInput, "Passwords do not match");
    } else {
        removeError(confirmPasswordInput);
    }

    if (countryInput.value.trim() === "") {
        showError(countryInput, "Select your country");
    } else {
        removeError(countryInput);
    }

    if (!agreeCheckbox.checked) {
        showError(agreeCheckbox, "You must agree to the terms and conditions");
    } else {
        removeError(agreeCheckbox);
    }

    // If any field is not filled, stop form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // If all fields are filled, submit the form
    form.submit();
}

// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    // Toggle password visibility logic
});

// Add event listener for form submission
form.addEventListener("submit", handleFormData);

// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    passToggleBtn.classList.toggle('fa-eye-slash'); // Toggle eye icon
});
