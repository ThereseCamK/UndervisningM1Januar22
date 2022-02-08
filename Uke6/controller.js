function selectBar(barNo){
    chosenBar = barNo === chosenBar ? 'Ingen' : barNo;
    show();
}

function removeChosenBar(){
    numbers.splice(chosenBar -1, 1);
    show();
}

function changeChosenBar(){
    let value = parseInt(inputValue);
    if(value < 1 || value > 10){
        alert('Verdien er ugyldig');
    }
   else {
       numbers[chosenBar - 1] = value;
   }
   show();

}

function addNewBar(){
    let value = parseInt(inputValue);
    if(value < 1 || value > 10){
        alert('Verdien er ugyldig');
       //errorMSG = 'Verdien er ugyldig';
    }
    else{
        numbers.push(value);
    }
  
    show();
}

