let bold = document.querySelector(".bold");
let underline = document.querySelector(".underline");
let italic = document.querySelector(".italic");


let left = document.querySelector(".left");
let right = document.querySelector(".right");
let center = document.querySelector(".center");

bold.addEventListener("click" , function(e){
    let cellObject = db[rowId][colId];
    if(cellObject.fontStyle.bold){
        lastSelectedCell.style.fontWeight = "normal";
        bold.classList.remove("active-menu");
    }
    else{
        lastSelectedCell.style.fontWeight = "bold";
        bold.classList.add("active-menu");
    }
    cellObject.fontStyle.bold = !cellObject.fontStyle.bold;
})

underline.addEventListener("click" , function(e){
    let cellObject = db[rowId][colId];
    if(cellObject.fontStyle.underline){
        lastSelectedCell.style.textDecoration = "none";
        underline.classList.remove("active-menu");
    }
    else{
        lastSelectedCell.style.textDecoration = "underline";
        underline.classList.add("active-menu");
    }
    cellObject.fontStyle.underline = !cellObject.fontStyle.underline;
})

italic.addEventListener("click" , function(e){
    let cellObject = db[rowId][colId];
    if(cellObject.fontStyle.italic){
        lastSelectedCell.style.fontStyle = "normal";
        italic.classList.remove("active-menu");
    }
    else{
        lastSelectedCell.style.fontStyle = "italic";
        italic.classList.add("active-menu");
    }
    cellObject.fontStyle.italic = !cellObject.fontStyle.italic;
})


left.addEventListener("click", function(e){
    let cellObject = db[rowId][colId]
    if(cellObject.textAlign=="left")
        return;
    
    cellObject.textAlign = "left";
    lastSelectedCell.style.textAlign = "left";
    setMenu(cellObject)
})

right.addEventListener("click", function(e){
    let cellObject = db[rowId][colId]
    if(cellObject.textAlign=="right")
        return;
    
    cellObject.textAlign = "right";
    lastSelectedCell.style.textAlign = "right";
    setMenu(cellObject)
})

center.addEventListener("click", function(e){
    let cellObject = db[rowId][colId]
    if(cellObject.textAlign=="center")
        return;
    
    cellObject.textAlign = "center";
    lastSelectedCell.style.textAlign = "center";
    setMenu(cellObject)
})

function setMenu(cellObject){
    cellObject.fontStyle.bold ? bold.classList.add("active-menu") : bold.classList.remove("active-menu");
    cellObject.fontStyle.italic ? italic.classList.add("active-menu") : italic.classList.remove("active-menu");
    cellObject.fontStyle.underline ? underline.classList.add("active-menu") : underline.classList.remove("active-menu");
}