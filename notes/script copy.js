// selects all the elements of a class and assigns them to a variable
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
// In JavaScript, variables need to be initialized before they can be used. In this case, the activeToggle variable is being used to keep track of which toggle button is currently active.
// Setting its initial value to null is a way to indicate that no toggle button is active at the beginning, because null means "no value" in JavaScript.
// Later on in the code, this variable is updated to reference the currently active toggle button, so that it can be properly managed when a new toggle button is clicked.

toggleButtons.forEach((toggle) => {
  // loop through each element in the toggleButtons array, and for each element, execute the code inside the function that takes toggle as an argument.

  toggle.addEventListener("click", () => {
    //An event listener is a function that gets called when a specific event happens to an element, such as when a user clicks on a button.
    //The function takes two arguments: the name of the event to listen for (in this case, "click"), and the function that should be called when the event happens (the arrow function).
    //Meaning "add a 'click' event listener to the toggle element, and when the element is clicked, execute the code inside the arrow function."

    const parent = toggle.parentNode;
    //sets the parent variable to the HTML element that is the parent node of the toggle element. In this case, the toggle element is the button that was clicked, and its parent node is the element that contains the question and answer.

    const answer = parent.querySelector("p");
    //finds the <p> element that is a child of the parent element (i.e., the element that contains the question and answer) and assigns it to the answer variable.

    //in summary, the parent variable is used to find the parent element of the toggle button, which is then used to find the corresponding answer element that should be displayed when the button is clicked.

    if (toggle === activeToggle) {
      //checks whether the current toggle button that was clicked is the same as the activeToggle button that was previously clicked.

      //if the toggle button is the same as the activeToggle button, the code inside the if block toggles the visibility of the answer element (i.e., the <p> element) and toggles the rotate class of the arrow icon (i.e., the <img> element). If the toggle button is not the same as the activeToggle button, the code inside the else block hides all other answer elements, shows the current answer element, and sets the current toggle button as the new activeToggle button.

      answer.style.display = answer.style.display === "none" ? "block" : "none";

      //answer.style.display wants to set the css display property of the answer (in this case, a <p> element).
      // in order to do that first it checks what its the current css display property of answer
      // it does that by running the comparison expression answer.style.display === "none"
      // if the comparison expression its true than it returns the value of block to be set as the css display property of answer
      // if the comparison expression is false, i.e. else, meaning the current the css display property of answer is block then it returns none to be set as the css display property of answer

      //The expression itself is a ternary operator. It is a shorter way to write an if...else statement in one line. The syntax for the ternary operator is:

      //condition ? expressionIfTrue : expressionIfFalse;

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

// walk through the JavaScript code step-by-step

// First, the code gets all the elements with a class of "question-toggle" and assigns them to a variable called toggleButtons. It also gets the .img-box and .faq-container elements and assigns them to imgBox and faqContainer variables, respectively.

// The code then adds two event listeners to the faqContainer element. The first listener listens for a "mouseover" event and when triggered, it moves the imgBox to the left by changing its CSS style.

// The second listener listens for a "mouseout" event and when triggered, it moves the imgBox back to its original position.

// Next, the code initializes a variable called activeToggle to null.

// The code then iterates over each toggle button using a forEach loop and adds a click event listener to each button.

// When a toggle button is clicked, the code first finds the parent element of the button (which is the div containing the question and answer), and then finds the answer element (which is the <p> element containing the answer).

// If the clicked button is the same as the currently active button (i.e., activeToggle), then the answer element's display property is toggled between "none" and "block", and the .toggle-arrow element within the clicked button is also toggled between its regular state and a rotated state.

// If the clicked button is not the same as the currently active button, then the answer elements of all toggle buttons are hidden (display set to "none"), and their .toggle-arrow elements are rotated back to their regular state. Then, the answer element of the clicked button is shown (display set to "block"), and its .toggle-arrow element is rotated to the rotated state. Finally, the activeToggle variable is updated to the clicked button.
// .
// .
// .
// .

// what does this means, explain like i don't even know what js is

// what about this line
answer.style.display = answer.style.display === "none" ? "block" : "none";

// what does this means, explain like i don't even know what js is
