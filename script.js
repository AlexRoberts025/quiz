function check()
{
    var score=0;
    var q1=document.quiz.q1.value;
    var q2=document.quiz.q2.value;
    var q3=document.quiz.q3.value;
    var q4=document.quiz.q4.value;
    var q5=document.quiz.q5.value;
    
    if(q1=="correct"){score++;}
    if(q2=="correct"){score++;}
    if(q3=="correct"){score++;}
    if(q4=="correct"){score++}
    if(q5=="correct"){score++}
    
    var percent= (score/5)*100;
  
 document.getElementById('result').innerHTML= "You got " + score + " out of 5 correct";
 alert("Your Score is : " + parseInt(percent)+"%");
}