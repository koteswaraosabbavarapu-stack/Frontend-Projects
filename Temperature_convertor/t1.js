    const textBox=document.getElementById('txt');
    const toFor=document.getElementById('toFor');
   const toCel=document.getElementById('toCel');
   const result=document.getElementById('res');
   let temp;
    function convert(){

      if(toFor.checked){
        temp=Number(textBox.value);
        temp=9/5*temp+32;
        result.textContent= temp.toFixed(1) +"'F";
        
      }
      else if(toCel.checked){
        temp=Number(textBox.value);
        temp=(5/9)*(temp-32);
        result.textContent= temp.toFixed(1) +"'C";
      }
      else{
        result.textContent='Select a unit';
      }


    }

 