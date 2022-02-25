function show(){
    let html = '';
    html += `${showBar()}
    ${model.innhold}
    `;

    appDiv.innerHTML = html;
}

function showBar(){
    let html = `
    <button onclick="changePage('shop')"> Butikk </button>
    <button onclick="changePage('kurv')"> Handlekurv (${model.totalpris}) </button>
 
    `
    return html;
}

function changePage(side){
    model.aktivside = side;
    updateView();
}
updateView();
function updateView(){
    const side = model.aktivside;
    if(side == 'shop') viewShop();
    if(side == 'kurv') viewCart();
}

function viewShop(){

    let html = '<h1>nettbutikk</h1> ';

    for(let i = 0; i < model.produkt.length; i++){
        let first = i % 3 == 0 ? 'first' : '';
        html += `
        <div class="cell ${first} "onclick="addToCart(${i})">
            ProduktNavn: ${model.produkt[i].navn} <br>
            Pris: <tt>${model.produkt[i].pris}</tt> <br>
            lagerStatus: ${model.produkt[i].lagerAntall}<br>
            <hr>

        </div>
        `
    }
    model.innhold = html;
    show();
}

function viewCart(){

    let html = `<h1>handlekurv</h1>
    antall varer: ${model.antallVarer}<hr>
    `;

    for(let i = 0; i < model.handlekurv.length; i++){
        html += `
           item: ${model.handlekurv[i]}<br>
        `
    }
    model.innhold = html;
    show();
}


