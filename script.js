// Smooth scroll ke section Anggota Tribe 1
document.addEventListener("DOMContentLoaded", function () {
  const hash = window.location.hash;
  if (hash === "#team") {
    const teamTitle = document.getElementById("team");
    if (teamTitle) {
      teamTitle.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  // Ripple effect pada team cards
  const teamCards = document.querySelectorAll(".team-card");
  teamCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      ripple.classList.add("ripple");

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
});

// Dark mode preference
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.setAttribute("data-theme", "dark");
}

// Listen to theme changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  if (e.matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
});
