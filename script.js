const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    } 
    catch(error){
        display.value = "Error";
    }
}

function backSpace(){
    display.value = display.value.substr(0, display.value.length - 1);
}