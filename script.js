// LegalEase Interactivity
document.addEventListener("DOMContentLoaded", () => {
    console.log("LegalEase application loaded successfully.");

    // Handle smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId.startsWith("#")) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});
