var equal = document.getElementById('equal'),
    refresh = document.getElementById('reset'),
    historyArray = JSON.parse(localStorage.getItem('example'));

    if(historyArray == null){
        historyArray = [];
    }

    if(historyArray.length > 5 ){
        historyArray.shift();
    }
        
equal.addEventListener('click' , function calc(event){
    event.preventDefault();
    var firstInput = parseFloat(document.getElementById('firstInput').value),
        secondInput = parseFloat(document.getElementById('secondInput').value),
        operations = document.getElementById('operations').value;
        
    switch (operations){
        case '+': 
            document.getElementById('result').value = firstInput + secondInput;
            break;
        case '-': 
            document.getElementById('result').value = firstInput - secondInput;
            break;
        case '*': 
            document.getElementById('result').value = firstInput * secondInput;
            break;
        case '÷': 
            document.getElementById('result').value = firstInput / secondInput; 
            break;
    }
    addToHistory();
});

refresh.addEventListener('click' , function removeNumbers(event){
    event.preventDefault();
    firstInput.value = "";
    secondInput.value = "";
    result.value = "";
});

function addToHistory(){
    var list = document.getElementById('list');
        p = document.createElement('p');
    
    var example = {
        "firstNumber": firstInput.value,
        "operations": operations.value,
        "secondNumber": secondInput.value,
        "result": document.getElementById('result').value
        }
    historyArray.push(example);
    
    localStorage.setItem("example" , JSON.stringify(historyArray));

    p.innerHTML = firstInput.value + operations.value + secondInput.value + " = " + document.getElementById('result').value;
    
    list.append(p);
    
    if(list.childNodes.length > 5){
        list.removeChild(list.childNodes[0]);
    }

    if(historyArray.length > 4 ){
        historyArray.shift();
    }
}
var list = document.getElementById('list');

for(exampleLine of historyArray){
    p = document.createElement('p');
    p.innerHTML = exampleLine.firstNumber + exampleLine.operations + exampleLine.secondNumber + " = " + exampleLine.result;
    list.append(p);
    if(historyArray.length > 5 ){
        historyArray.shift();
    }
}







 


