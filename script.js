// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById("grid");
    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");
    newRow.appendChild(newCell);
    for(let i = 0; i < numCols; i++) {
        let newCell = document.createElement("td");
        newRow.appendChild(newCell);
    }
    grid.appendChild(newRow);
    numRows++;
}

// Add a column
function addC() {
    let grid = document.getElementById("grid");
    let allRows = document.getElementsByTagName("tr");
    for (let i = 0; i < numRows; i++) {
        let newCell = document.createElement("td");
        allRows[i].appendChild(newCell);
    }
    numCols++;
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}