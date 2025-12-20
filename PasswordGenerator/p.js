
      
      function setPassword(length,lowerCase,upperCase,numbers,symbols){
          const lowerCaseChar='abcdefghijklmnopqrstuvwxyz';
          const upperCaseChar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          const numberChar='0123456789';
          const symbolChar='~!@#$%^&*()_+';
          let allowedChar='';
          let password='';
          
          allowedChar+=lowerCase? lowerCaseChar:"";
          allowedChar+=upperCase? upperCaseChar:"";
          allowedChar+=numbers? numberChar:"";
          allowedChar+=symbols? symbolChar:"";
          

          if(length<=0){
             return 'Password length must be atleast 1';
          }
          else if(allowedChar.length===0){
            return `atleast 1 set of characters needs to be selected`;
          }

           for(let i=0;i<length;i++){
             const ranIndex=Math.floor(Math.random()*allowedChar.length);
             password+=allowedChar[ranIndex];

           }
           return password;

      }
         
      document.getElementById("but").addEventListener("click",function(){
           const passwordLength=12;
          const haveLowercase=true;
           const haveUppercase=true;
          const haveNUmbers=true;
          const haveSymbols=true;

       const genratePass=setPassword(passwordLength,haveLowercase,haveUppercase,haveNUmbers,haveSymbols);
       document.getElementById("pass").value=genratePass;
      });


     document.getElementById("rad").addEventListener("change",function(){
        const getpass=document.getElementById("pass");
        if(this.checked){
          getpass.type="text";
  
        }
        else{
          getpass.type="password";
        }
     });
     
      
     
