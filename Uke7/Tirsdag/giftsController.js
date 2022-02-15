function showSingleGift(index){
           
    model.text = `Du vil kjøpe: ${model.gifts[index]}`;
    view();
}

function removeGift(index){
    model.gifts.splice(index, 1);
    view();
}

function addNewGift(){
    
    model.gifts.push(model.newGift);
    view();
}