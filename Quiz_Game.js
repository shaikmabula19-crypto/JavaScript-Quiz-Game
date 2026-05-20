let questionBook=[{
    id:"qs-1",
    question:"What is the Full form of JS?",
    options:["Java Selinium","Java Support","Java Selectors","JavaScript"],
    correctAnswer:"JavaScript"
},
{
    id:"qs-2",
    question:"What is the Full form of DOM?",
    options:["Domain Object Model","Document Object Manupulation","Document Object Model","Design Object Module"],
    correctAnswer:"Document Object Model"
},
{
    id:"qs-3",
    question:"What is the Full form of BOM?",
    options:["Browser Object Model","Browser Object Manupulation","Box Office Model","Browser Oriented Model"],
    correctAnswer:"Browser Object Model"
},
{
    id:"qs-4",
    question:"What is the Full form of TDZ?",
    options:["Time Dead Zone","Tarzan Danger Zone","Titanic Dead Zone","Temporal Dead Zone"],
    correctAnswer:"Temporal Dead Zone"
},
{
    id:"qs-5",
    question:"What is the Full form of ES?",
    options:["Enveronmental Study","Easy Script","EcmaScript","None of these"],
    correctAnswer:"EcmaScript"
}];

let questionElement=document.getElementById("question")
let optionElement=document.getElementById("options")
let scoreElement=document.getElementById("score")
let currentQuestion=0;
let score=0;
let answered=true;
function displayQuestion(){
    let {id,question,options,correctAnswer}=questionBook[currentQuestion]
    // console.log(id);
    // console.log(question);
    // console.log(options);
    questionElement.textContent=question;
    options=shuffleQuestion([...options])
    options.map((opt,i)=>{
        let btn=document.createElement("button")
        btn.textContent=opt;
        btn.setAttribute("class","optionButtons")
        optionElement.append(btn);
        btn.addEventListener("click",()=>{
            if(opt==correctAnswer){
                btn.style.backgroundColor="green";
                score+=1;
                
            }else{
                btn.style.backgroundColor="red";
                score-=0.25;
            }
            setTimeout(()=>{
                nextQuestion()
            },1000)
            console.log(score);
            scoreElement.textContent=`Score:${score}/${questionBook.length}`
            let allbtn=document.querySelectorAll(".optionButtons");
            allbtn.forEach((b)=>b.disabled=true)
            
        })
    })
}
displayQuestion();
function nextQuestion(){
    currentQuestion++;
    optionElement.textContent=" ";
    if(currentQuestion==questionBook.length){
        questionElement.textContent="Quiz completed Successfully!!!🤩🤩🤩"
    }
    else{
        displayQuestion();
    }
}
function shuffleQuestion(arr){
    for(let i=arr.length-1;i>0;i--){
            let j=Math.floor(Math.random()*(i+1));
            [arr[i],arr[j]]=[arr[j],arr[i]]
    }
    return arr;
}



