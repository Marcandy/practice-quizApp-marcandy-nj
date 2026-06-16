const currentQuestion = document.getElementById('currentQuestion');
const listAnswers = document.getElementById('listAnswers');
const feedback = document.getElementById('feedback');
const allRadio = document.querySelectorAll('input[type="radio"]');

// { text: '3', correct: true},
//         { text: "4", correct: true },
//         { text: "6", correct: false },
//         { text: "300", correct: false },
const questionObj = {
    question: 'What is two times two ?',
    answer: [
        2,3,4,6
    ],
    correctAnswer: '4' 
}


listAnswers.addEventListener('click', (event) => {
    let userChoice;

    // loop and check which radio is selected
    allRadio.forEach((sinlgeRd) => {
        if(sinlgeRd.checked) {
            console.log(sinlgeRd, event.target.value, 'single')
            userChoice = sinlgeRd.value
        }
    })

    // compare for correct answer
    if(userChoice === questionObj.correctAnswer) {
        feedback.textContent = "Correct answer :)"
    } else {
       feedback.textContent = "Wrong answer :(" 
    }
     
    //disable all other radio

    allRadio.forEach((sinlgeRd) => {
        sinlgeRd.disabled = true
    })
    
})

