//Question 1

function indentPhrase(multiplier) {
    let count = 0;
    while (count < Number(multiplier)) {
        console.log(" ".repeat(count) + "The Flintstone Rock!");
        count++;
    }
}

indentPhrase(10);

//Question 2
let munstersDescription = "The Munsters are creepy and spooky.";
let result = "";
for (index = 0; index < munstersDescription.length; index++) {
    if (munstersDescription.charAt(index) === munstersDescription.charAt(index).toUpperCase())
        result += munstersDescription.charAt(index).toLowerCase();
    else
        result += munstersDescription.charAt(index).toUpperCase();
}

console.log(result);


let result2 = munstersDescription.split("").map(char => {
    if (char === char.toUpperCase()) {
        return char.toLowerCase();
    } else {
        return char.toUpperCase();
    }
}).join("");

console.log(result2);
