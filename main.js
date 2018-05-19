var rowCount=0;
function addRow(){
    //get the table has id dynamic-table   
    var table = document.getElementById("dynamic-table");
    //create a row element at rowCount
    var row = table.insertRow(rowCount);
    //create cells at 0 and 1
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    //manipulate text for cells
    cell1.innerHTML = `Row ${rowCount} Cell ${(rowCount*2)+1}`;
    cell2.innerHTML = `Row ${rowCount} Cell ${(rowCount*2)+2}`;
    //incremnet the rowcount
    ++rowCount
    //make the table to visble
    table.style.visibility = "visible";
}

function init(){
    rowCount=0;
   
    //get the div has container ID
    var container = document.getElementById("container");

    //create the paragraph node, add text and assign CSS class for instruction text
    var instructionPara = document.createElement("p");
    var instructionNode = document.createTextNode(`Click "Add Row" button to add row in the table.`);
    instructionPara.appendChild(instructionNode);
    instructionPara.classList.add("instruction");
    container.appendChild(instructionPara);
}