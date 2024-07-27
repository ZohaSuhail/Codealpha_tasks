const display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}
function displayText(input) {
    display.value += input;
    console.log(display.value)
}
function clearLastCharacter() {
    if (display.value.length > 0) {
        display.value = display.value.substring(0, display.value.length - 1);
    }
    console.log(display.value);
}
function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value="Error";
    }
}