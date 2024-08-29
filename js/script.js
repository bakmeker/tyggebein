const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu-inner");
const burger = document.querySelector(".humbugger");
const closeMenu = document.querySelector(".closeMenu");

// Navbar Menu Toggle Function
function toggleMenu() {
  menu.classList.toggle("is-active");
  closeMenu.classList.toggle("is-active");
}

// Toggle Mobile Submenu Function
function toggleSubMenu(e) {
  if (!menu.classList.contains("is-active")) {
    return;
  }

  const target = e.target.closest(".menu-dropdown");
  if (target) {
    const submenu = target.querySelector(".submenu");
    const icon = target.querySelector(".menu-link > i");

    if (submenu) {
      // Toggle submenu visibility
      submenu.classList.toggle("is-active");

      // Rotate the icon based on submenu state
      icon.style.transform = submenu.classList.contains("is-active")
        ? "rotate(-90deg)"
        : "rotate(90deg)";

      e.stopPropagation(); // Prevent event from propagating and causing unexpected behavior
    }
  }
}

// Close Menu on Click Outside
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !burger.contains(e.target)) {
    if (menu.classList.contains("is-active")) {
      toggleMenu();
    }
  }
});

// Initialize All Event Listeners
burger.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
menuInner.addEventListener("click", toggleSubMenu);

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    if (menu.classList.contains("is-active")) {
      toggleMenu();
    }
  }
});

// Contact Form Section
// Contact Form Section
// Contact Form Section
function submitForm() {
  // Get form fields
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Get submit button and change to loading state
  var submitButton = document.getElementById("submitButton");
  submitButton.disabled = true;
  submitButton.innerText = "Sender...";

  // Simulate a short delay for the loading effect (for demonstration purposes)
  setTimeout(function () {
    // Check if other fields are empty
    document.getElementById("fullNameError").style.display =
      fullName === "" ? "flex" : "none";
    document.getElementById("emailError").style.display =
      email === "" ? "flex" : "none";
    document.getElementById("messageError").style.display =
      message === "" ? "flex" : "none";

    // Check if all fields are filled
    if (fullName !== "" && email !== "" && message !== "") {
      document.getElementById("contactSubmitMessage").style.display = "block";
      submitButton.disabled = false; // Enable button again
      submitButton.innerText = "Send message";
    } else {
      document.getElementById("contactSubmitMessage").style.display = "none";
      document.getElementById("formErrorMessage").style.display = "flex";
      submitButton.disabled = false; // Enable button again
      submitButton.innerText = "Send message";
    }
  }, 1000); // Simulate a delay of 1 second
}

function resetStartForm() {
  // Reset form fields and hide success message
  document.getElementById("startForm").reset();
  document.getElementById("contactSubmitMessage").style.display = "none";
  document.getElementById("formErrorMessage").style.display = "none";
  // Reset button state
  var submitButton = document.getElementById("submitButton");
  submitButton.disabled = false;
  submitButton.innerText = "Send message";
}

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
