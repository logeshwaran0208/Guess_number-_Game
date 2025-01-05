   //select the value id
   var a=document.getElementById("num1")    
   var b=document.getElementById("para")
   var score=document.getElementById("score")
   var ran_m= Math.random()*10
   var ran=Math.floor(ran_m)+1
   var total_score=10;
   function guess()
    {
      var enter_number=a.value
     
      
      if(ran==enter_number)
      {
         b.textContent="you are right"
         alert("WON THE GAME")
 
      }
      else{
         total_score=total_score-1;
         score.textContent="chances:"+total_score;
          b.textContent="you are Wrong"
      }
    }