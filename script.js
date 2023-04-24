const toggleButtons = document.querySelectorAll(".question-toggle");
const imgBox = document.querySelector(".img-box");
const faqContainer = document.querySelector(".faq-container");

faqContainer.addEventListener("mouseover", () => {
  imgBox.style.left = "-10rem";
});

faqContainer.addEventListener("mouseout", () => {
  imgBox.style.left = "-8rem";
});

let activeToggle = null;

toggleButtons.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const parent = toggle.parentNode;
    const answer = parent.querySelector("p");

    if (toggle === activeToggle) {
      answer.style.display = answer.style.display === "none" ? "block" : "none";
      toggle.querySelector(".toggle-arrow").classList.toggle("rotate");
    } else {
      toggleButtons.forEach((t) => {
        const p = t.parentNode.querySelector("p");
        if (p) {
          p.style.display = "none";
          t.querySelector(".toggle-arrow").classList.remove("rotate");
        }
      });
      answer.style.display = "block";
      toggle.querySelector(".toggle-arrow").classList.add("rotate");
      activeToggle = toggle;
    }
  });
});
