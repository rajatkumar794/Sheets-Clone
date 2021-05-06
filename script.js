let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-column");
let topLeftCell = document.querySelector(".top-left-cell");
let cells = document.querySelector(".cells");
let addressInput = document.querySelector("#address");
let formulaInput = document.querySelector("#formula");
let allCells = document.querySelectorAll(".cell");


cellsContent.addEventListener("scroll" , function(e){
    let top = e.target.scrollTop ;
    let left =  e.target.scrollLeft;

    topRow.style.top = top+"px";
    leftCol.style.left = left+"px";
    topLeftCell.style.top = top+"px";
    topLeftCell.style.left = left+"px";
})

let rowId;
let colId;
let lastSelectedCell;

cells.addEventListener("click", function(e){
    let currentCell = e.target;
    rowId = Number(currentCell.getAttribute("rowid"));
    colId = Number(currentCell.getAttribute("colid"));
    let address = String.fromCharCode(65+rowId)+(colId+1)+"";
    let cellData = db[rowId][colId]
    addressInput.value = address
    formulaInput.value = cellData.formula
})

for(let i=0; i<cells.clientHeight; ++i)
{
    allCells[i].addEventListener("blur" , function(e){
        let currentElement = e.target;
        lastSelectedCell = currentElement;
        let value = currentElement.textContent;
        let cellData = db[rowId][colId]; 
        if(value != cellData.value){
            cellData.value = value;
        }
    })
}

formulaInput.addEventListener("blur", function(e){
    let formula = formulaInput.value;
    if(formula && lastSelectedCell)
    {   
        let solvedValue = solveFormula(formula)
        //setting in UI
        lastSelectedCell.textContent = solvedValue
        //setting in DB
        let cellData = db[rowId][colId];
        cellData.value = solvedValue
        cellData.formula = formula
    }
})