
function show(){

    let html = `<div> <h1>${model.mainTitle}</h1><br>
    <input type="text" oninput="SRCFunkis(this.value)">
    </div>`;

    for(let i = 0; i < model.songs.length; i++){
        let visibleInput = '<br>Sjanger:';
        if(model.songs[i].genre == ''){
            visibleInput = '';
        }
        html += `<div onclick="addToCart(${i})">
        Tittel: ${model.songs[i].title}<br>
        Artist: ${model.songs[i].artist}<br>
        Varighet: ${model.songs[i].duration}
        ${visibleInput} ${model.songs[i].genre}<br>
        Album: ${model.songs[i].album}<br>
        <img class="albumPic" src="${model.songs[i].picture}">
        </div><hr>`
    }

    html += `${inputs()}`



appDiv.innerHTML = html
}

function inputs(){
    return `
    <div>
    Tittel: <input type="text" oninput="model.inputs.title = this.value"> <br>
    Artist: <input type="text" oninput="model.inputs.artist = this.value"><br>
    Varighet:  <input type="text" oninput="model.inputs.duration = this.value"><br>
    Sjanger:  <input type="text" oninput="model.inputs.genre = this.value"><br>
    Album:  <input type="text" oninput="model.inputs.album = this.value"><br>
    <button onclick="addASong()"> Legg til </button>
    </div>
    `;
}