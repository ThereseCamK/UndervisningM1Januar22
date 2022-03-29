function addToCart(index){
    if (model.produkt[index].lagerAntall == 0) alert('ikke på lager');
    else{
        model.produkt[index].lagerAntall --;
        model.antallVarer ++;
        model.totalpris += model.produkt[index].pris;
        model.handlekurv.push(
            model.produkt[index].navn
        )
  
    }
    viewShop();
 
}