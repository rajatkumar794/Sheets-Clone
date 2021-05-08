let bold = document.querySelector(".bold");
let underline = document.querySelector(".underline");
let italic = document.querySelector(".italic");


let left = document.querySelector(".left");
let right = document.querySelector(".right");
let center = document.querySelector(".center");

let fontFamily = document.querySelector("#font-family")
let fontSize = document.querySelector("#font-size")

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

fontFamily.addEventListener("change", function(e){
    let fontFamilyIndex = Number(e.target.selectedIndex);
    let cellObject = db[rowId][colId]
    if(fontFamilyIndex==0)
    {   cellObject.fontFamily = "Arial"
        lastSelectedCell.style.fontFamily = cellObject.fontFamily;
    }
    else if(fontFamilyIndex==1)
    {   cellObject.fontFamily = "Georgia";
        lastSelectedCell.style.fontFamily = cellObject.fontFamily;
    }
    else if(fontFamilyIndex==2)
    {   
        cellObject.fontFamily = "Tahoma";
        lastSelectedCell.style.fontFamily = cellObject.fontFamily;
    }   
    else if(fontFamilyIndex==3)
    {
        cellObject.fontFamily = "Calibri";
        lastSelectedCell.style.fontFamily = cellObject.fontFamily;
    }
    else if(fontFamilyIndex==4)
    {   cellObject.fontFamily = "Lucida";
        lastSelectedCell.style.fontFamily = cellObject.fontFamily;
    }
})

fontSize.addEventListener("change" , function(e)
{   
    let cellObject = db[rowId][colId]
    let newFontSize = fontSize.value;
    lastSelectedCell.style.fontSize = newFontSize+"px"
})

function setMenu(cellObject){
    cellObject.fontStyle.bold ? bold.classList.add("active-menu") : bold.classList.remove("active-menu");
    cellObject.fontStyle.italic ? italic.classList.add("active-menu") : italic.classList.remove("active-menu");
    cellObject.fontStyle.underline ? underline.classList.add("active-menu") : underline.classList.remove("active-menu");

    let alignment = cellObject.textAlign; //left center right
    if(document.querySelector(".font-alignment .active-menu"))
        document.querySelector(".font-alignment .active-menu").classList.remove("active-menu");

    if(alignment == "left")
        left.classList.add("active-menu");
    else if(alignment == "center")
        center.classList.add("active-menu");
    else
        right.classList.add("active-menu");

}