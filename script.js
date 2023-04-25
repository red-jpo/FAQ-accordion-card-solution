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
      //checks if the button that was clicked is the same as the previously clicked one, if the accordion was closed, it opens. if it was open closes
    } else {
      toggleButtons.forEach((t) => {
        const p = t.parentNode.querySelector("p");
        if (p) {
          p.style.display = "none";
          t.querySelector(".toggle-arrow").classList.remove("rotate");
        }
        //resets all the non selected buttons to their default state (<p>> hidden, arrows pointing downwards)
      });
      answer.style.display = "block";
      toggle.querySelector(".toggle-arrow").classList.add("rotate");
      activeToggle = toggle;
      //opens the accordion and rotates the arrow of the clicked button and sets it as the activeToggle
    }
  });
});
