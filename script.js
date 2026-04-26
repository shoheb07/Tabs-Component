const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    
    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove("active"));
    
    // Hide all contents
    contents.forEach(content => content.classList.remove("active"));
    
    // Activate clicked button
    button.classList.add("active");
    
    // Show corresponding tab
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});
