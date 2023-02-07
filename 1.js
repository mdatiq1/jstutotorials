 //global variable

   let btn = document.getElementById('btn');
   btn.addEventListener('click',submit);


 function submit(){

     var dataEntered = retreieveData();
     console.log(dataEntered);
     
 }
 
 


 function retreieveData(){
   
 
     var name=document.getElementById("Name").value;
     var phone = document.getElementById("phone").value;
  

     var fruits = [name,phone];
     return fruits;
     
 }
 
 



