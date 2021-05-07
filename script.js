let topRow = document.querySelector(".top-row");
let topRowCells = document.querySelectorAll(".top-row-cell");
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
    if(document.querySelector(".highlight-cell"))
        document.querySelector(".highlight-cell").classList.remove("highlight-cell")
    
    if(document.querySelector(".highlight-col"))
    {
        let elements = document.querySelectorAll(".highlight-col")
        elements[0].style.borderTop="";
        for(let i=0; i<elements.length; ++i)
            elements[i].classList.remove("highlight-col")
        elements[elements.length-1].style.borderBottom=""
            
    }
    
    currentCell.classList.add("highlight-cell")
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
        let cellData = db[rowId][colId];
        let targetCell = db[Number(lastSelectedCell.getAttribute("colid"))][Number(lastSelectedCell.getAttribute("rowid"))];
        //console.log(lastSelectedCell);
        let solvedValue = solveFormula(formula, targetCell)
        //setting in UI
        lastSelectedCell.textContent = solvedValue
        //setting in DB
        cellData.value = solvedValue
        cellData.formula = formula
        console.log(db);
    }
})

for(let i=0; i<topRowCells.length; ++i)
{   
    topRowCells[i].addEventListener("click", function(e){
        if(document.querySelector(".highlight-cell"))
            document.querySelector(".highlight-cell").classList.remove("highlight-cell")
            
        if(document.querySelector(".highlight-col"))
        {
            let elements = document.querySelectorAll(".highlight-col")
            elements[0].style.borderTop="";
            for(let i=0; i<elements.length; ++i)
                elements[i].classList.remove("highlight-col")
            elements[elements.length-1].style.borderBottom=""
                
        }
            
        let colName = e.target.innerText;
        let colId = colName.charCodeAt(0)-65;
        let colCells = document.querySelectorAll(`[colid="${colId}"]`)
        
        colCells[0].style.borderTop = "2px solid black";
        for(let j=0; j<colCells.length; ++j)
            colCells[j].classList.add("highlight-col")
        colCells[colCells.length-1].style.borderBottom = "2px solid black";
        colCells[0].style.background="white"
    })
}