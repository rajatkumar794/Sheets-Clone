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
            if(targetCell && !db[rowId][colId].dependents.includes(targetCell))
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

function updateChildren(cell)
{
    for(let i=0; i<cell.dependents.length; ++i)
    {
        let dependentCell = cell.dependents[i];
        let solvedValue = solveFormula(dependentCell.formula)
        let {rowId, colId} = getRowColIdFromAddress(dependentCell.name)

        let targetCell = document.querySelector(`[rowid="${rowId}"][colid="${colId}"]`)
        targetCell.textContent = solvedValue
        db[rowId][colId].value = solvedValue
        changeDependents(dependentCell)
    }
}