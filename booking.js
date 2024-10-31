document.addEventListener("DOMContentLoaded", () => {
    const timeSlots = document.querySelectorAll(".time-slot");
    const validateButton = document.getElementById("validate-button");

    timeSlots.forEach(slot => {
        slot.addEventListener("click", () => {
            
            if (slot.classList.contains("disabled")) return;

            
            timeSlots.forEach(s => s.classList.remove("selected"));

            
            slot.classList.add("selected");

            // Afficher le bouton "Valider"
            validateButton.style.display = "block";
        });
    });
});


function validateSelection() {
    // Redirection vers la page principale
    window.location.href = "index.html";
}
