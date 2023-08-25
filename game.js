const Questions=[
    {
      q:"1. What is the correct syntax for referring to an external script called \"xxx.js\"?",
      a:[
        {txt:"<script src='index.js'>",iscorrect:true},
        {txt:"<link src='index.js'>",iscorrect:false},
        {txt:"<script src='index.css'>",iscorrect:false},
        {txt:"<link rel='stylesheet'>",iscorrect:false}
      ]

    },
    {
        q:"2. Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        a:[
            {txt:"Position",iscorrect:"false"},
            {txt:"Window",iscorrect:"true"},
            {txt:"Standard",iscorrect:"false"},
            {txt:"Location",iscorrect:"false"}
        ]
    },
    {
        q:"3. Which of the following can be used to call a JavaScript Code Snippet?",
        a:[
            {txt:"Function/Method",iscorrect:"true"},
            {txt:" Preprocessor",iscorrect:"false"},
            {txt:" Triggering Event",iscorrect:"false"},
            {txt:" RMI",iscorrect:"false"}
        ]

    },
    {
        q:"4. Which of the following scoping type does JavaScript use?",
        a:[
            {txt:"Sequential",iscorrect:"false"},
            {txt:"Segmental",iscorrect:"false"},
            {txt:"Literal",iscorrect:"false"},
            {txt:" Lexical",iscorrect:"true"}
        ]

    },
    {
        q:"5. What will be the result or type of error if p is not defined in the following JavaScript code snippet?,console.log(p)",
        a:[
            {txt:"Value not found Error",iscorrect:"false"},
            {txt:"Null",iscorrect:"false"},
            {txt:"Reference Error",iscorrect:"true"},
            {txt:"Zero",iscorrect:"false"}
        ]

    },
    {
        q:"6. Which of the following is not a framework?",
        a:[
            {txt:"JavaScript .NET",iscorrect:"false"},
            {txt:"Cocoa JS",iscorrect:"false"},
            {txt:"JavaScript",iscorrect:"true"},
            {txt:"jQuery",iscorrect:"false"}
        ]

    },
    {
        q:"7. Which of the following is the property that is triggered in response to JS errors?",
        a:[
            {txt:"onerror",iscorrect:"true"},
            {txt:"onmessage",iscorrect:"false"},
            {txt:"onexception",iscorrect:"false"},
            {txt:" onclick",iscorrect:"false"}
        ]

    },
    {
        q:"8. Which of the following is not an error in JavaScript?",
        a:[
            {txt:"Missing of Bracket",iscorrect:"false"},
            {txt:"Syntax error",iscorrect:"false"},
            {txt:"Missing of semicolons",iscorrect:"false"},
            {txt:"Division by zero",iscorrect:"true"}
        ]

    },
]
let currentQuestion=0;
let score=0;
   function load()
  {
        const qe=document.getElementById('que');
        qe.textContent=Questions[currentQuestion].q;
        const op=document.getElementById("ans");
        op.innerHTML="";
        for(let i=0;i<Questions[currentQuestion].a.length;i++)
        {
            const cdiv=document.createElement("div");
            const choice=document.createElement("input");
            const clable=document.createElement("label");

            choice.type="radio";
            choice.name="answer";
            choice.value=i;

            clable.textContent=Questions[currentQuestion].a[i].txt;

            cdiv.appendChild(choice);
            cdiv.appendChild(clable);
            op.appendChild(cdiv);

        }
  }
  load();
    function next()
    {
        if(currentQuestion<Questions.length-1)
        {
            currentQuestion++;
            load();
        }
        else
        {
            document.getElementById("que").remove();
            document.getElementById("ans").remove();
            document.getElementById("rem").remove();
             mark();
             button();
             

        }
    }
    button();
    function checkAns() {
        const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
     
        if (Questions[currentQuestion].a[selectedAns].iscorrect) {
            score++;
            console.log("Correct")
            next();
        } else {
            next();
        }
    }
   function mark()
   {
        const s=document.getElementById('say');
        s.textContent=`You have Scored ${score} Out of 8`;
   }
   function dis()
   {
    let a=document.getElementById("feed");
    a.style.display="block";
   }
     function button()
     {
        sc=document.getElementById("clear");
       sc.style.display="inline";
     }