function solveFormula(formula)
{
    let fcomp = formula.split(" ")
    console.log(fcomp);
    for(let i=0; i<fcomp.length; ++i)
    {
        let comp = fcomp[i]
        if(comp>="A" && comp<="Z")
        {
            let {rowId, colId} = getRowColIdFromAddress(comp)
            let cellData = db[rowId][colId]
            let value = cellData.value
            
            formula = formula.replace(comp, value)
        }
    }
    console.log(formula);
    return  eval(formula)
}

function getRowColIdFromAddress(address){

    let colId = address.charCodeAt(0) - 65;
    let rowId = Number(address.substring(1)) - 1;
    return {rowId , colId};
}