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
        let fbArray = generateValues(FizzValue, BuzzValue);

        // Call displayNumbers
        displayNumbers(fbArray);
    }else{
        alert("You must enter integers");
    }
}

// Generate numbers from the startValue to the endValue
// Logic function(s)
function generateValues(FizzValue, BuzzValue){
    let fbArray = [];
    // Genenate all numbers from start to end
    for (let i = 1; i <= 100; i++) {
        if(i % FizzValue == 0 && i % BuzzValue == 0){
            fbArray.push("FizzBuzz");
        }else if(i % FizzValue == 0){
            fbArray.push("Fizz")
        }else if(i % BuzzValue == 0){
            fbArray.push("Buzz")
        }else{
           fbArray.push(i); 
        }
    }
    return fbArray;
}

// Display the numbers and mark the FizzBuzz
// Display or view function
function displayNumbers(fbArray){

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    //add all the rows to the table.
    for (let i = 0; i < fbArray.length; i += 5){

        let tableRow = document.importNode(templateRow.content, true)

        //grab use the ro put into array
        let rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];
        
        rowCols[1].classList.add(fbArray[i + 1]);
        rowCols[1].textContent = fbArray[i + 1];

        rowCols[2].classList.add(fbArray[i + 2]);
        rowCols[2].textContent = fbArray[i + 2];

        rowCols[3].classList.add(fbArray[i + 3]);
        rowCols[3].textContent = fbArray[i + 3];

        rowCols[4].classList.add(fbArray[i + 4]);
        rowCols[4].textContent = fbArray[i + 4];


        tableBody.appendChild(tableRow);

    }

}