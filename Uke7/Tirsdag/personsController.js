function addPerson(){

    model.persons.push({
        name: model.inputs.name,
        age: model.inputs.age,
    });
    view();
}