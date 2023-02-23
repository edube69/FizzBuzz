// Get the values from the App page
// Start or controller function
function getValues(){

    // Get values from the page
    let FizzValue = document.getElementById("FizzValue").value;
    let BuzzValue =  document.getElementById("BuzzValue").value;

    // We need to validate our input
    // parse into integers
    FizzValue = parseInt(FizzValue);
    BuzzValue = parseInt(BuzzValue);
        
    if(Number.isInteger(FizzValue) && Number.isInteger(BuzzValue)){
        // Call generateNumbers
        let numbers = generateValues(1, 100);

        // Call displayNumbers
        displayNumbers(numbers, FizzValue, BuzzValue);
    }else{
        alert("You must enter integers");
    }
}

// Generate numbers from the startValue to the endValue
// Logic function(s)
function generateValues(sValue, eValue){
    let numbers = [];
    // Genenate all numbers from start to end
    for (let i = sValue; i <= eValue; i++) {
        numbers.push(i);
    }
    return numbers;
}

// Display the numbers and mark the FizzBuzz
// Display or view function
function displayNumbers(numbers, FizzValue, BuzzValue){
    let templateRows = "";
    for (let i = 0; i < numbers.length; i++){
        let FizzBuzz = "";
        let number = numbers[i];
        if(number % FizzValue == 0 && number % BuzzValue == 0){
            FizzBuzz = "FizzBuzz";
        }else if(number % FizzValue == 0){
            FizzBuzz = "Fizz";
        }else if(number % BuzzValue == 0){
            FizzBuzz = "Buzz";
        }else{
            FizzBuzz = number;
        }
        templateRows += `<tr><td>${FizzBuzz}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
}