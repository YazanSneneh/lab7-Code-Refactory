// take user name, age and fav color
var userName = prompt('Introduce yourself');
var age = prompt('How old are you ?');
var color = prompt('What is your favourite color ?')


userData(age)  // main function where all run togethr

  
function userData(age){
   alert('Welcome ' + userName);
   validate(age)  // check user age and responde based on that
   document.body.style.backgroundColor = color;
}

// user age 18 or older, less than 18 and older than 10, younger than 10
function validate(age){

    if( parseInt(age) >=18){
        confirm('Your age is higher 18 or higher, you are free to continue your journey')
    }else if(parseInt(age) <=10){
        confirm('you should be sleeping by now')
    }else if(parseInt(age) <10 && parseInt(age) <=18){
        confirm('Your age is lower than 18, you are not allowed to enter')
    }else{
         confirm('check your code developer')
    }
}