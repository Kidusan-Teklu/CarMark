// welcome text with displaying name

var name=prompt("please enter your name:");
var sex=prompt("enter sex: M for male and F for female");
 if(sex=='F' || sex=='f')
 {
    alert("Hello "+"mrs. "+name+ " welcome to our carlist!");
 }
 else if(sex=='M'|| sex=='m')
 {
    alert("Hello "+"mr. "+name+ " welcome to our carlist!");
 }

 // styling the text on the header

 var hd1 = document.getElementById('hdr');
 
 function hoverEffect(hedr) { 
   hedr.addEventListener('mouseover', function() {
    
     hedr.style.backgroundColor = 'orange';
     hedr.style.color = 'white'; 
     hedr.style.width='500px';
     hedr.style.height= '7px';
     hedr.style.border='green solid 3px';
     hedr.style.margin.Top='10px';
     hedr.style.margin='10px 100px 10px 300px';
     hedr.style.width= 'fit-content';
     hedr.style.padding= '25px';
     hedr.style.margin.left= '310px';
     hedr.style.transition='0.55s';
   });
 
   hedr.addEventListener('mouseout', function() {
     hedr.style.borderStyle = '';
     hedr.style.backgroundColor = '';
     hedr.style.color = '';
     hedr.style.width='';
   });
 }
 
 hoverEffect(hd1); 

// applying hover-effects for the buttons on top

var op1 = document.getElementById('option1');
var op2 = document.getElementById('option2');
var op3 = document.getElementById('option3');
var op4 = document.getElementById('option4');
var op5 = document.getElementById('option5');
var op6 = document.getElementById('option6');
var op7 = document.getElementById('option7');


function applyHoverStyles(option) {

    option.addEventListener('mouseover', function() {
    option.style.color = 'black';
    option.style.backgroundColor = 'lightgreen';
    option.style.width = '150px';
    option.style.cursor='pointer';
  });

  option.addEventListener('mouseout', function() {
    option.style.color = '';
    option.style.backgroundColor = '';
    option.style.width = '';
  });
}
applyHoverStyles(op1);
applyHoverStyles(op2);
applyHoverStyles(op3);
applyHoverStyles(op4);
applyHoverStyles(op4);
applyHoverStyles(op5);
applyHoverStyles(op6);
applyHoverStyles(op7);

// adding event listener when clicking the buttons on top by using id

document.getElementById('option1').
  addEventListener('click',function()
  {
    document.getElementById('car1').
    scrollIntoView({behavior:'smooth'});

  }
)

document.getElementById('option2').
addEventListener('click',function()
{
  document.getElementById('car2').
  scrollIntoView({behavior:'smooth'});

}
)

document.getElementById('option3').
addEventListener('click',function()
{
  document.getElementById('car3').
  scrollIntoView({behavior:'smooth'});

}
)
document.getElementById('option4').
addEventListener('click',function()
{
  document.getElementById('car4').
  scrollIntoView({behavior:'smooth'});

}
)
document.getElementById('option5').
addEventListener('click',function()
{
  document.getElementById('car5').
  scrollIntoView({behavior:'smooth'});

}
)

document.getElementById('option6').
addEventListener('click',function()
{
  document.getElementById('car6').
  scrollIntoView({behavior:'smooth'});

}
)
document.getElementById('option7').
addEventListener('click',function()
{
  document.getElementById('car7').
  scrollIntoView({behavior:'smooth'});

}
)

//styling the hover effect on the car images & description

var car1 = document.getElementById('car1');
var car2 = document.getElementById('car2');
var car3 = document.getElementById('car3');
var car4 = document.getElementById('car4');
var car5 = document.getElementById('car5');
var car6 = document.getElementById('car6');
var car7 = document.getElementById('car7');

function addHoverEffect(car) {
  car.addEventListener('mouseover', function() {
    car.style.borderStyle = 'dashed';
    car.style.backgroundColor = 'aqua';
    car.style.color = 'black';
    car.style.transition='0.4s';
    
  });

    car.addEventListener('mouseout', function() {
    car.style.borderStyle = '';
    car.style.backgroundColor = '';
    car.style.color = '';
    
  });
}
addHoverEffect(car1);
addHoverEffect(car2);
addHoverEffect(car3);
addHoverEffect(car4);
addHoverEffect(car5);
addHoverEffect(car6);
addHoverEffect(car7);

//styling the read more buttons by their tag name before hover
 
var element1=document.getElementById('readMoreBtns1');
element1.style.color='red';
element1.style.cursor='pointer';
//
var element2=document.getElementById('readMoreBtns2');
element2.style.color='red';
element2.style.cursor='pointer'; 
//
var element3=document.getElementById('readMoreBtns3');
element3.style.color='red';
element3.style.cursor='pointer';
//
var element4=document.getElementById('readMoreBtns4');
element4.style.color='red';
element4.style.cursor='pointer';
//
var element5=document.getElementById('readMoreBtns5');
element5.style.color='red';
element5.style.cursor='pointer';
//
var element6=document.getElementById('readMoreBtns6');
element6.style.color='red';
element6.style.cursor='pointer';
//
var element7=document.getElementById('readMoreBtns7');
element7.style.color='red';
element7.style.cursor='pointer';


// styling the read more buttons by their tag name when hovering 

var buttons = document.getElementsByTagName('button');

//Change text style on hover

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseover', function() {
    this.style.color = 'white';
    this.style.width='150px';
    this.style.height='50px';
   
  });

// change back style after hovering on it

  buttons[i].addEventListener('mouseout', function() {
    this.style.color = 'red';
    this.style.width='';
    this.style.height='';
  });
}

 

