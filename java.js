console.log("this ias only for test");
// create an element
let divE = document.createElement('div');
console.log(divE);
// add text to the created element
let text= document.createTextNode("this is good boy md atiqur rahman");
divE.appendChild(text); // this line is shiftting element to div
 divE.setAttribute('id', 'new');
 divE.setAttribute('class', 'new-class');
divE.setAttribute('style', ' border : 2px solid red, width:100px')
 let container = document.querySelector('.container');
 let id = document.getElementById('myfirst');
 console.log(container,id);
 

   container.insertBefore(divE,myfirst);
 divE.appendChild(text);
 // add event listener to div elem
  divE.addEventListener( 'click',function(){
    let html ='<input type ="text">';
  })