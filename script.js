document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const toggleBtn = document.getElementById("dark-mode-toggle");
  const contactForm = document.getElementById("contact-form");
  const searchInput = document.getElementById("searchbar");

  // Hamburger Menu Toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Contact Form Alert
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for reaching out! We'll get back to you soon.");
      contactForm.reset();
    });
  }

  // Dark Mode
  const enableDark = () => {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    if (toggleBtn) toggleBtn.innerText = "☀️";
  };

  const disableDark = () => {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    if (toggleBtn) toggleBtn.innerText = "🌙";
  };

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.contains("dark") ? disableDark() : enableDark();
    });
  }

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") enableDark();
  else disableDark();

  // Search Filter
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const cards = document.querySelectorAll(".card");

      cards.forEach((card) => {
        const title = card.dataset.title?.toLowerCase() || "";
        const content = card.innerText.toLowerCase();

        if (title.includes(query) || content.includes(query)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }
});
