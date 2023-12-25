// JSON data for FAQs
const faqData = [
  {
    question: "What is frontend mentor and how will it help me?",
    answer:
      "Frontend mentor provides you with real-world challenges that you can solve with the skills you have. There are multiple challenges available, each with a starter codebase and style guide to get you going.",
  },
  {
    question: "Is frontend mentor free?",
    answer: "Yes! Anyone can sign up and use our platform for free.",
  },
  {
    question: "Can I use frontend mentor to build real projects?",
    answer: "Yes! In fact, we encourage you to do so. ",
  },
  {
    question: "How can I get help if I'm stuck?",
    answer: "There are a number of ways you can get help. ",
  },
];

// Function to generate accordion items from JSON data
function generateAccordionItems(data) {
  const accordionContainer = document.querySelector(".acc-container");
  let openItem = null; // Track the currently open accordion item

  data.forEach((item, index) => {
    // Create accordion item
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    // Create question element
    const question = document.createElement("div");
    question.classList.add("question");
    question.textContent = item.question;

    // add plus minus icon at end of question from assets folder
    const icon = document.createElement("img");
    icon.classList.add("icon");
    icon.src = "./assets/images/icon-plus.svg";

    // Append icon to question
    question.appendChild(icon);

    // Create answer element
    const answer = document.createElement("div");
    answer.classList.add("answer");
    answer.textContent = item.answer;

    // Append question and answer to accordion item
    accordionItem.appendChild(question);
    accordionItem.appendChild(answer);

    // Attach event listener to toggle answer visibility
    question.addEventListener("click", () => {
      // Close any previously open accordion item
      if (openItem && openItem !== accordionItem) {
        const openAnswer = openItem.querySelector(".answer");
        const openIcon = openItem.querySelector(".icon");
        openAnswer.classList.remove("show");
        openIcon.src = "./assets/images/icon-plus.svg";
      }

      // Toggle visibility of the clicked accordion item
      answer.classList.toggle("show");

      // Change icon based on answer visibility
      if (answer.classList.contains("show")) {
        icon.src = "./assets/images/icon-minus.svg";
      } else {
        icon.src = "./assets/images/icon-plus.svg";
      }

      // Update the currently open accordion item
      openItem = accordionItem;
    });

    // Append accordion item to the container
    accordionContainer.appendChild(accordionItem);
  });
}

// Call the function with the FAQ data when the document is loaded
document.addEventListener("DOMContentLoaded", () => {
  generateAccordionItems(faqData);
});
