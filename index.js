const display = document.getElementById("display");

function appendToDisplay(input )
{
    if (display.value == "Error" || display.value == "Infinity" || display.value == "NaN"){
        display.value ="";
    }
    display.value += input; 
}

function ClearDisplay(){
    display.value = "";
}

function Calculate(){
    try {
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value ="Error";
    }
}

function CalculateSquare()
{
    display.value = display.value*display.value;
}

function CalculateSquareRoot()
{
    display.value = display.value**0.5;
}

function InverseValue()
{
    display.value = 1/display.value;
}

function ClearEntry()
{
    if (display.value == "Error" || display.value == "Infinity" || display.value == "NaN"){
        display.value ="";
    }
    else{
        display.value = display.value.slice(0,-1);
    }
}

function ChangeSign() {
    if (display.value) { // Step 1: Check if there is a value in the display
        let currentExpression = display.value.trim(); // Step 2: Remove extra spaces, just in case

        // Step 3: Find the last number in the expression
        let lastNumberMatch = currentExpression.match(/-?\d+\.?\d*$/);

        if (lastNumberMatch) { // Step 4: If a number is found
            let lastNumber = lastNumberMatch[0]; // Step 5: Get the matched last number
            let toggledNumber = parseFloat(lastNumber) * -1; // Step 6: Multiply it by -1 to toggle its sign

            // Step 7: Replace the last number in the expression with the toggled number
            display.value = currentExpression.slice(0, -lastNumber.length) + toggledNumber;
        }
    }
}
