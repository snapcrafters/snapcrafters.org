
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const links = document.querySelectorAll("#blog-toc a");

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

