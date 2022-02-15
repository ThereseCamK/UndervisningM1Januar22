
function view(){
    let html = `${navBar()} <br>
    ${showPersons()}
    `;

    // for(let i = 0; i < model.gifts.length;  i++){
    //     html += `<div> <h4 onclick="showSingleGift(${i})">${model.gifts[i]}</h4>
    //         <button onclick="removeGift(${i})">Retuner</button>
    //         </div> <hr>`;
    // } 
       // html += `${model.text}<br>
    // <input type="text" oninput="model.newGift = this.value"> 
    // <button onclick="addNewGift()">Legg til</button>
    // `

    
   
        html += `navn:<input type="text" oninput="model.inputs.name = this.value"><br>
        alder:<input type="text" oninput="model.inputs.age = this.value"> <br>
        <button onclick="addPerson()"> Legg Til Person </button>`;
    appDiv.innerHTML = html;
}

function navBar(){
    let html = ''
    for(let i = 0; i < model.navbar.length; i++){
      html += `<button> ${model.navbar[i]} </button>`
    }
    return html;
}

function showPersons(){
    let html = ''
    for(let i = 0; i < model.persons.length; i++){
        html += `<div>navn: ${model.persons[i].name} <br>
                    alder: ${model.persons[i].age}</div> <hr>`
    } 
    return html;
}