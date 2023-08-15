/** Implement a click function to which writes digits on calculator screen */

/** Implement a function which clears digits from calculator screen upon clicking AC button */

/** Implement a function which enters digit to screen upon pressing any number button and decimal point */

/** Implement a function for adding/subtracting/multiplying/dividing first entered number */

/** */

let string = '';
const buttons = document.querySelectorAll('button');
const clearScreen = () => {
    string = '';
    document.getElementById('screentext').innerHTML = string;
  }
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerHTML;
    if(buttonText === '='){
        document.getElementById('screentext').innerHTML = eval(string);
    }else if(buttonText === 'AC'){
        clearScreen()
    }
   
    
    else{
        string = string+buttonText;
        document.getElementById('screentext').innerHTML = string;
    }
  });
});
