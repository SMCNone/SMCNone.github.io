// Smooth scrolling animation

const allLinks = document.querySelectorAll(".seta");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scroll({
        top: 0,
        left:0,
        behavior: "smooth",
      });   
  });
});