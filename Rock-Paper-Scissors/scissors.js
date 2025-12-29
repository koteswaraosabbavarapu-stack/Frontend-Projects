

 const score=JSON.parse(localStorage.getItem('score')) || {
        wins:0,
        losses:0,
        ties:0
      };
      
      updateScore();
      
    /*if(!score){
      score={
        wins:0,
        losses:0,
        ties:0
      }
    }*/
    let intervalId;
    let IsAutoPlay=false;
    function autoplay(){
      if(!IsAutoPlay){
      intervalId=setInterval(()=>{
         const playerMove=pickComputerMove();
         
         playGame(playerMove);
      },1000);
      IsAutoPlay=true;
    }
      else{
        clearInterval(intervalId);
        IsAutoPlay=false;
      }
    }
    document.querySelector('.js-rockBut').addEventListener('click',() =>{
      playGame('rock');
    });

    document.querySelector('.js-paperBut').addEventListener('click',() =>{
      playGame('paper');
    });

    document.querySelector('.js-scissorsBut').addEventListener('click',() =>{
      playGame('scissors');
    });
    
    document.body.addEventListener('keydown',(event)=>{
       if(event.key==='r'){
        playGame('rock');
       }
       else if(event.key==='p'){
        playGame('paper');
       }
       else if(event.key==='s'){
        playGame('scissors')
       }
    })


    
    function playGame(playerMove){
             let res='';
             const comMov = pickComputerMove();
            if(playerMove==='scissors'){
                if(comMov==='rock'){
              res='You loose';
          }
          else if(comMov==='paper'){
              res='You win';
          }
          else if(comMov==='scissors'){
              res='Tie';
          }
          
            }


            else if(playerMove==='paper'){
             
              if(comMov==='rock'){
            res='You win';
          }
          else if(comMov==='paper')
          {
            res='Tie';
          }
          else if(comMov==='scissors'){
            res='You loose';
          }
            }


            else if(playerMove==='rock'){
              if(comMov==='rock'){
              res='Tie';
          }
          else if(comMov==='paper'){
              res='You loose';
          }
          else if(comMov==='scissors'){
              res='You win';
          }
            }
            if(res==='You win'){
            score.wins+=1;
            }
            else if(res==='You loose'){
              score.losses+=1;
            }
            else if(res==='Tie'){
              score.ties+=1;
          }

//localStorage.setItem('key','value');
           localStorage.setItem('score',JSON.stringify(score));
           
          updateScore();

           document.querySelector('.Result').innerHTML=res;

           document.querySelector('.moves').innerHTML=` You
      <img class="adjIcon" src="images/${playerMove}.png" >
      <img class="adjIcon" src="images/${comMov}.png" >
      Computer`;

       
    }
  
    function updateScore(){
      document.querySelector('.Score')
      .innerHTML=`
 wins:${score.wins},loses:${score.losses},Ties:${score.ties}`;
    }
    function pickComputerMove(){
          
          let comMov='';
    
          const randomNo= Math.random();
          if(randomNo>=0 && randomNo<1/3){
            comMov='rock';
          }
          else if(randomNo>=1/3&& randomNo<=2/3)
          {
            comMov='paper';
          }
          else if(randomNo>=2/3 && randomNo<=1){
            comMov='scissors';
            
          }
          return comMov;
        
    }