// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    if (numRows > 0){
        let grid = document.getElementById("grid");
        if (grid.hasChildNodes()){
            let lastRow = grid.lastChild;
            grid.removeChild(lastRow);
        }
        numRows--;
    }
}

// Remove a column
function removeC() {
    if (numCols > 0){
        let grid = document.getElementById("grid");
        for (let i = 0; i < numRows; i++){
            grid.rows[i].deleteCell(-1);
        }
        numCols--;
    }
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