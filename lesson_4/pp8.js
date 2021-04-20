let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function positionIntoObject(arr) {
    let flintstonesOjbect = {}
    
    arr.forEach(name => {
        flintstonesOjbect[name] = arr.indexOf(name)        
    });

    return flintstonesOjbect;
}

console.log(positionIntoObject(flintstones));