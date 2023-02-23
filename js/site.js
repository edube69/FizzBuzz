// Get the values from the App page
// Start or controller function
function getValues(){

    // Get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue =  document.getElementById("endValue").value;

    // We need to validate our input
    // parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
        
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        // Call generateNumbers
        let numbers = generateValues(startValue, endValue);

        // Call displayNumbers
        displayNumbers(numbers);
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
function displayNumbers(numbers){
    let templateRows = "";
    for (let i = 0; i < numbers.length; i++){
        let FizzBuzz = "";
        let number = numbers[i];
        if(number % 3 == 0 && number % 5 ==0){
            FizzBuzz = "FizzBuzz";
        }else if(number % 3 == 0){
            FizzBuzz = "Fizz";
        }else if(number % 5 == 0){
            FizzBuzz = "Buzz";
        }else{
            FizzBuzz = number;
        }
        templateRows += `<tr><td>${FizzBuzz}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
}