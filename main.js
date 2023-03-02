// --------- TODO  ----------------
// SETMATRIX FUNCTION
// DEFAULT VALUES WHEN NOT SELECTED
// PLUS AND MINUS BUTTONS

const btn = document.getElementById('set');
const dayelement = document.getElementById('days');
const monthelement = document.getElementById('month')
const monthCell = document.getElementsByTagName('td')
const plusbtn = document.getElementById('plusBtn')
const minusBtn = document.getElementById('minusBtn')
var multiplier = 0

function getCurrent(){
    return [monthelement.selectedIndex,dayelement.selectedIndex]
}

function setMatrix(dayelement){
    // if(dayelement == 0 ){dayelement=1}
    var montharr = setdays(monthCell,monthelement.selectedIndex)
    let week = dayelement*7 
    let j = multiplier * 12
    for(let i = 0; i<monthCell.length;i++){
        montharr[i].textContent = (j * week)
        j++;
    }
}

function setdays(collection,index){
    var arr = Array.from(collection) 
    for(let i = 0; i<index-1; i++){
        let a = arr.shift();
        arr.push(a)
    }
    return arr
}

btn.addEventListener('click', function(){

    for(let i = 0; i<monthCell.length; i++){
        monthCell[i].textContent="-";
    }
})

monthelement.addEventListener("change", function(){
    
    if(dayelement.selectedIndex == '0')
    {dayelement.value='1'}
    
    setMatrix(dayelement.selectedIndex);
    // var selIndex = dayelement.selectedIndex
    // var selectedOption = dayelement.options[1]
    // selectedOption.textContent="Asas"
    
    
});

dayelement.addEventListener('change', function(){
    
    if(monthelement.selectedIndex == '0')
    {monthelement.value='6'}
    setMatrix(dayelement.selectedIndex)
})

plusbtn.addEventListener('click', function(){
    multiplier = multiplier+1
    setMatrix(dayelement.selectedIndex)
})

minusBtn.addEventListener('click',function(){
    if(!multiplier < 1){
        multiplier = multiplier-1
        setMatrix(dayelement.selectedIndex)
    }
})


