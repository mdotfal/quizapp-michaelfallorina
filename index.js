


/*********************************************  GENERATE HTML  ************************************************** */

// generates the form for the start page
function generateStartPage() {
  return `
  <form class="start-quiz">
    <label> 
      This id the demo quiz, are you ready to begin?
    </label>
    <button type="submit">
      Start
    </button>
  </form>
  `;
}

// generates the form for displaying the main question page
function generateQuestion() {
  return `
    <form class="question-quiz question-container">
      <div class="question-count"> <h2>Question ${currentQuestion + 1} of 15</h2></div>
    
      <div class="question-header"><h3>${questions[currentQuestion].question}</h3></div>

      <div class="quiz-html">
        <input id="option1" name="option" required type="radio" value="${questions[currentQuestion].option1}" />
          <label for="option1"> ${questions[currentQuestion].option1}</label>
        <input id="option2" name="option" required type="radio" value="${questions[currentQuestion].option2}" />
          <label for="option2"> ${questions[currentQuestion].option2}</label>
        <input id="option3" name="option" required type="radio" value="${questions[currentQuestion].option3}" />
          <label for="option3"> ${questions[currentQuestion].option3}</label>
        <input id="option4" name="option" required type="radio" value="${questions[currentQuestion].option4}" />
          <label for="option4"> ${questions[currentQuestion].option4}</label>
      </div>
        <button type="submit" class="btn">
          Submit 
        </button>
    </form>
  `;
}

// generates the form for correct answers
function generateCorrect() {
  return `
    <form class="feedback">
      <h2> CORRECT! </h2>
     <div class="correct-gif">
      <img src="/images/catch.gif" />
     </div>
      <p> Current Score: ${score} / 15 </p>
      <button type="submit">Next>></button>
    </form>
  `;
}

// generates the form for wrong answers
function generateIncorrect() {
  return `
    <form class="feedback">
      <h2> WRONG! </h2>
      <div class="wrong-gif">
      <img src="/images/killing-me-smalls.gif" />
     </div>
      <p> Correct answer is ${questions[currentQuestion].correct} </p>
      <p> ${score} out of 15!!! </p>
      <button type="submit">Next</button>
    </form>
  `;
}

// generates the final results page, final tally, and restart quiz button
function generateResults() {
  return `
    <form class="results">
      <h2>You scored ${score} out of 15 Correct!</h2>
      <button type="submit">Restart Quiz</button>
    </form>
  `;
}

/*********************************************  RENDER START PAGE  ************************************************** */

// renders start page into the DOM
function renderStartPage() {
  $( '.quiz-container' ).html( generateStartPage );
}

/*********************************************  EVENT HANDLERS  ************************************************** */

function startQuizHandler() {
  // targets the '.start-quiz' selector to render generateQuestion page
  $( '.start-quiz' ).on( 'submit', function( event ){
    event.preventDefault();
    $( '.quiz-container' ).html( generateQuestion );
  });
}

function submitAnswerHandler() {
  // targets the '.question-quiz' child selector
  $( '.quiz-container' ).on( 'submit', '.question-quiz', function( event ) {
    // prevents reload
    event.preventDefault();
    // checks if the input selected === questions[currentQuestion].correct
    if ( $( 'input[name="option"]:checked').val() === questions[currentQuestion].correct ) {
      // adds 1 to the score count
      score++;
      // replaces the form and renders generateCorrect
      $( '.quiz-container' ).html( generateCorrect );
    } else {
      // replaces the form and renders generateIncorrect
      $( '.quiz-container' ).html( generateIncorrect );
    }
  });
}

function submitNextHandler() {
  //  targets '.feedback' child selector
  $( '.quiz-container' ).on( 'submit', '.feedback', function( event ) {
    event.preventDefault();
    // checks if the currentQuestion count is larger or equal to questions.length - 1 (last question)
    if ( currentQuestion >= questions.length - 1) {
      // replaces form and renders generateResults page
      $( '.quiz-container' ).html( generateResults );
    } else {
      // adds 1 to currentQuestion count
      currentQuestion++;
      // replaces and renders generateQuestion page
      $( '.quiz-container' ).html( generateQuestion );
      console.log("Clicked on Next button!")
    }
  });
}

/*********************************************  BINDS EVENT HANDLERS  ************************************************** */

function init(){
  renderStartPage();
  startQuizHandler();
  submitAnswerHandler();
  submitNextHandler();
}

init();