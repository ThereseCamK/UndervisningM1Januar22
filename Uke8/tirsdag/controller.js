function addASong(){
    let inputs = model.inputs;
    if(inputs.title != '' && inputs.artist !='' && 
    inputs.duration !=''  && inputs.album){
        model.songs.push(
            {
                title: model.inputs.title,
                artist: model.inputs.artist,
                duration: model.inputs.duration,
                genre: model.inputs.genre,
                album: model.inputs.album
            }
        )
    }
    else alert('Du må fylle inn alle feltene')
    
    show();
}

function SRCFunkis(inputValue){
    for(let i = 0; i < model.songs.length; i++){
        if(model.songs[i].title.includes(inputValue) ||
         model.songs[i].artist.includes(inputValue)){
            console.log(model.songs[i].title)
            console.log(model.songs[i].artist)
        }
    }
    console.log(inputValue)

}

function addToCart(index){
    // model.totalPrice += 
    alert(`Du har nå valgt: ${model.songs[index].title}`)
}