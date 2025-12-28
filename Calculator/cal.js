 let cal=localStorage.getItem('cal') || '';
    displayCon();
    function updateCalculation(value){
      cal+=value;
      displayCon();
      localStorage.setItem('cal',cal);
      
    }

    
    function calculate() {
  try {
    cal = eval(cal);
    localStorage.setItem('cal', cal);
    displayCon();
  } catch (error) {
    cal = "Error";
    displayCon();
  }
}


     function displayCon(){
    document.querySelector(`.p1`).value=cal;
   }