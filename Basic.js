let billTotalInput=document.getElementById('billTotalInput')
let tipInput=document.getElementById('tipInput')
let numberOfPeople=document.getElementById('numberOfPeople')
let perPersonTotal=document.getElementById('perPersonTotal')
var val=Number(numberOfPeople.innerText)

function increasePeople()
{
    var increment=val+1;
    val=increment
    numberOfPeople.innerText=increment
    calculateBill()
}
function decreasePeople()
{
    let decrement=val-1;
    if(decrement>0)
    {
    val=decrement
    numberOfPeople.innerText=decrement
    }
    calculateBill()
}
function calculateBill()
{

    let Amount =Number(billTotalInput.value)
    let tippercentage=Number(tipInput.value)
    let tipamount= Amount *(tippercentage/100)
    let taotalamount=Amount+tipamount;
    let s= taotalamount/val
     perPersonTotal.innerText=s.toFixed(2)
     
}
