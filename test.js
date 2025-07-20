const quizData = {
    butterfly: [
      {
        question: "What is the first stage of a butterfly's life cycle?",
        options: ["Caterpillar", "Egg", "Chrysalis", "Adult Butterfly"],
        answer: "Egg"
      },
      {
        question: "What is the caterpillar's primary food source?",
        options: ["Grass", "Milkweed", "Flowers", "Leaves"],
        answer: "Milkweed"
      },
      {
        question: "Which stage comes after the caterpillar?",
        options: ["Chrysalis", "Egg", "Adult Butterfly", "Froglet"],
        answer: "Chrysalis"
      },
    ],
    frog: [
      {
        question: "What is the first stage in the life cycle of a frog?",
        options: ["Tadpole", "Froglet", "Egg", "Adult Frog"],
        answer: "Egg"
      },
      {
        question: "What do tadpoles breathe with?",
        options: ["Lungs", "Gills", "Skin", "Both Gills and Lungs"],
        answer: "Gills"
      },
      {
        question: "At what stage do frogs start living both on land and in water?",
        options: ["Egg", "Tadpole", "Froglet", "Adult Frog"],
        answer: "Adult Frog"
      },
    ],
    fish: [
      {
        question: "What is the first stage of a fish's life cycle?",
        options: ["Egg", "Larva", "Juvenile", "Adult Fish"],
        answer: "Egg"
      },
      {
        question: "What do fish larvae feed on after hatching?",
        options: ["Plants", "Algae", "Yolk sacs", "Small insects"],
        answer: "Yolk sacs"
      },
      {
        question: "At what stage is a fish capable of reproduction?",
        options: ["Larva", "Juvenile", "Adult Fish", "Egg"],
        answer: "Adult Fish"
      },
    ],
  };
  
  // Function to fetch the selected organism from the URL
  function getOrganismFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("organism");
  }
  
  // Function to display quiz questions based on the selected organism
  function displayQuiz() {
    const organism = getOrganismFromURL();
    const quizContainer = document.getElementById("quiz-container");
    const organismTitle = document.getElementById("organism-title");
  
    organismTitle.textContent = `${organism.charAt(0).toUpperCase() + organism.slice(1)} Quiz`;
  
    // Check if the organism exists in quizData
    if (organism && quizData[organism]) {
      // Generate the quiz questions for the selected organism
      quizData[organism].forEach((questionObj, index) => {
        const questionCard = document.createElement("div");
        questionCard.classList.add("quiz-card");
        questionCard.innerHTML = `
          <p><strong>Q${index + 1}: ${questionObj.question}</strong></p>
          ${questionObj.options.map((option, i) => `
            <label>
              <input type="radio" name="question${index}" value="${option}" />
              ${option}
            </label>
          `).join("<br/>")}
        `;
        quizContainer.appendChild(questionCard);
      });
    } else {
      // In case of an invalid organism
      quizContainer.innerHTML = "<p>Invalid organism selected. Please go back and try again.</p>";
    }
  }
  
  // Function to check the answers and show the result
  function submitQuiz() {
    const organism = getOrganismFromURL();
    const quizContainer = document.getElementById("quiz-container");
  
    let correctAnswers = 0;
    const quizQuestions = quizData[organism];
  
    // Iterate through all the questions and check the selected answers
    quizQuestions.forEach((questionObj, index) => {
      const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedAnswer && selectedAnswer.value === questionObj.answer) {
        correctAnswers++;
      }
    });
  
    // Display the result
    alert(`You got ${correctAnswers} out of ${quizQuestions.length} correct!`);
  }
  
  // Initialize the quiz page on load
  window.onload = displayQuiz;
  