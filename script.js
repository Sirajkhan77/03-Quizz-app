const questions=[
    {
        question: "What is the capital of pakistan?",
        answers : [
            { text: "Pishawar" , correct: false},
            { text: "Lahore" , correct: false},
            { text: "Islamabad" , correct: true},
            { text: "Karachi" , correct: false},
        ]
    },

    {
        question: "Who is prime minister of Pakistan?",
        answers : [
            { text: "Imran Khan" , correct: false},
            { text: "Bilawal Bhutto" , correct: false},
            { text: "Molana Diesel" , correct: false},
            { text: "King Shahbaz Sharif" , correct: true},
        ]
    },

    {
        question: "Which languages are used for frontend?",
        answers : [
            { text: "HTML & CSS" , correct: false},
            { text: "JavaScript" , correct: false},
            { text: "React.JS" , correct: false},
            { text: "All of the Above" , correct: true},
        ]
    },

    {
        question: "Who made Pakistan?",
        answers : [
            { text: "Imran Khan" , correct: false},
            { text: "Quaid-e-Azam" , correct: true},
            { text: "Nawaz Sharif" , correct: false},
            { text: "Allama Iqbal" , correct: false},
        ]
    },
    {
        question: "Which colors are in the flag of pakistan?",
        answers : [
            { text: "White and Green" , correct: true},
            { text: "Green and yellow" , correct: false},
            { text: "Red and Pink" , correct: false},
            { text: "Blue and White" , correct: false},
        ]
    },
]; 


const Qs = document.getElementById("question");
const allans =  document.getElementById("ans-btn");
const nextQ = document.getElementById("btn-next");

let Qindex = 0;
let scores = 0;

function StartQuiz(){
    Qindex = 0;
    scores = 0;
    nextQ.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currQ = questions[Qindex];
    let Qno = Qindex+1;
    Qs.innerHTML= Qno + "." + currQ.question;
    currQ.answers.forEach(ans=>{
        const butt = document.createElement("button");
        butt.innerHTML = ans.text;
        butt.classList.add("btn");
        allans.appendChild(butt);
        if (ans.correct){
            butt.dataset.correct = ans.correct;
        }
        butt.addEventListener("click" , SelectAnswer);
    })
}


function resetState(){
    nextQ.style.display = "none";
    while (allans.firstChild){
        allans.removeChild(allans.firstChild);
    }
}


function SelectAnswer(e){
    const SelectedBTN = e.target;
    const isCorrect = SelectedBTN.dataset.correct === "true";
    if (isCorrect){
        SelectedBTN.classList.add("Correct");
        scores++;
    }
    else{
        SelectedBTN.classList.add("inCorrect");
    }
    Array.from(allans.children).forEach(btt=>{
        if (btt.dataset.correct === "true"){
            btt.classList.add("Correct");
        }
        btt.disabled="true";
    });
    nextQ.style.display="block";
}

function showScores(){
    resetState();
    Qs.innerHTML= `You scored ${scores} out of ${questions.length}`;
    nextQ.innerHTML="Play Again";
    nextQ.style.display="block";
}


function handleNextButton(){
    Qindex++;
    if (Qindex<questions.length){
        showQuestion();
    }else{
        showScores();
    }
}

nextQ.addEventListener("click" , (e)=>{
    if (Qindex<questions.length){
        handleNextButton();
    }
    else{
        StartQuiz();
    }
})



StartQuiz();