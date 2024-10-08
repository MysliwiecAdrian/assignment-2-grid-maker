// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById("grid");
    let newRow = document.createElement("tr");
    let newCell = document.createElement("td");

    if(numRows === 0) {
        newCell.addEventListener("click", function() {
            newCell.style.backgroundColor = colorSelected;
        });
        newRow.appendChild(newCell);
        grid.appendChild(newRow);
        numCols++;
    }
    else {
        newRow.appendChild(newCell);
        for(let i = 1; i < numCols; i++) {
            let newCell = document.createElement("td");
            newCell.addEventListener("click", function() {
                newCell.style.backgroundColor = colorSelected;
            });
            newRow.appendChild(newCell);
        }
        grid.appendChild(newRow);
    }
    numRows++;
}

// Add a column
function addC() {
    if (numCols === 0 ){
        let grid = document.getElementById("grid");
        let newRow = document.createElement("tr");
        let newCell = document.createElement("td");
        newCell.addEventListener("click", function() {
            newCell.style.backgroundColor = colorSelected;
        });
        newRow.appendChild(newCell);
        grid.appendChild(newRow);
        numRows++;
    }
    else {
        let allRows = document.getElementsByTagName("tr");
        for (let i = 0; i < numRows; i++) {
            let newCell = document.createElement("td");
            newCell.addEventListener("click", function() {
                newCell.style.backgroundColor = colorSelected;
            });
            allRows[i].appendChild(newCell);
        }
    }
    numCols++;
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
        if (numRows === 0){
            numCols = 0;
            grid.innerHTML = "";
        }
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
        if (numCols === 0){
            numRows = 0;
            grid.innerHTML = "";
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let grid = document.getElementById("grid");
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numCols; j++){
            let cell = grid.rows[i].cells[j];
            if(cell.style.backgroundColor === ""){
                cell.style.backgroundColor = colorSelected;
            }
        }
    }
}

// Fill all cells
function fillAll(){
    let grid = document.getElementById("grid");
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numCols; j++){
            let cell = grid.rows[i].cells[j];
            cell.style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    let grid = document.getElementById("grid");
    grid.innerHTML = "";
    numRows = 0;
    numCols = 0;
}