function solveFormula(formula, targetCell)
{
    let fcomp = formula.split(" ")
    for(let i=0; i<fcomp.length; ++i)
    {
        let comp = fcomp[i]
        if(comp>="A" && comp<="Z")
        {
            let {rowId, colId} = getRowColIdFromAddress(comp)
            let cellData = db[rowId][colId]
            let value = cellData.value
            db[rowId][colId].dependents.push(targetCell);
            formula = formula.replace(comp, value)
        }
    }
    return  eval(formula)
}

function getRowColIdFromAddress(address){

    let colId = address.charCodeAt(0) - 65;
    let rowId = Number(address.substring(1)) - 1;
    return {rowId , colId};
}