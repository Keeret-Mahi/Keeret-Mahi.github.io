// Download Resume Buttons
document.querySelectorAll(".download-resume").forEach(btn => {
  btn.addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = "/assets/Keeret Mahi.pdf";    
    a.download = "Keeret_Mahi_Resume.pdf";        
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
});

// Gallery Button
document.getElementById("gallery-btn").addEventListener("click", () => {
  window.location.href = "gallery.html";
});