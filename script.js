// const question = [{question:"What is python?",correct:"b",option:["tool","programming language","game","tame"]},
// {question:"What is complier?",correct:"a",option:["tool","programming language","game","tame"]}
// ]


const url = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple'
fetch(url)
.then(response => response.json())
.then(function(data){
    
    var question = data.results
    // console.log(question)
    console.log(question)
    let questions = document.getElementById('question1')
    let first = document.getElementById('first')
    let second = document.getElementById('second')
    let third = document.getElementById('third')
    let forth = document.getElementById('forth')
    let container = document.getElementById('container')
    let submit = document.getElementById('submit')
    let start = document.getElementById('start')
    let i=0;
    let score = 0;
    let answers = document.querySelectorAll('.answer');

function show(){
    
        if(i==question.length){
            
            container.innerHTML= `<h1>You are done and here is your score ${score} out of ${question.length}</h1>`
            return;
            
        }
    
        questions.innerText = question[i].question
        a.value = first.innerText = question[i]['incorrect_answers'][0];
        b.value = second.innerText = question[i]['incorrect_answers'][1];
        c.value = third.innerText = question[i]['incorrect_answers'][2];
        d.value = forth.innerText = question[i]['correct_answer'];
        container.style.display = 'block'
        submit.style.display = 'block'
        // console.log(forth.value)
        
        // console.log(first.check)
        // container.appendChild(html)
        
        i++;
        
        
    }
    
    start.addEventListener('click',function(){
        start.style.display = 'none';
        console.log('start clicked')
        show();
    })
    
    function getSelected(){
        
        let x=undefined;
        answers.forEach((answer)=>{
            if(answer.checked){
                // console.log(answer.id)
                x = answer.value  
            }
            
            // console.log(answer.id)
        })
        
        return x;
    }
    
    function deselect(){
        answers.forEach(answer=>{
            answer.checked = false;
        })
    }
    
    
    submit.addEventListener('click',()=>{
        console.log(getSelected())
        console.log(question[i-1].correct)
        if(getSelected() == question[i-1]['correct_answer'])score++;
        deselect();
        show();
    });
    // console.log(data)
    // main
    // let question = data.question;
    // question.push(data.results[0].question)
})

// setTimeout(()=>{
//     console.log(question)
// },3000)

// console.log(questions)





