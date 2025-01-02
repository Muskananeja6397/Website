// Open and close popup
document.addEventListener("DOMContentLoaded", () => {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popup-text");
    const closeButton = document.querySelector(".close-btn");
  
    readMoreButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const info = button.getAttribute("data-info");
        popupText.textContent = info;
        popup.style.display = "flex";
      });
    });
  
    closeButton.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    // Close popup when clicking outside
    window.addEventListener("click", (event) => {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  });
  