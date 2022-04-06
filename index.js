const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat () {
    cats.push("Ralph");
}

function destructivelyPrependCat () {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat () {
    cats.pop();
}

function destructivelyRemoveFirstCat () {
    cats.shift();
}

function appendCat () {
    const copyOfCats = [...cats,"Broom"];
    return copyOfCats;
}

function prependCat () {
    const copyOfCats = ["Arnold", ...cats];
    return copyOfCats;
}

function removeLastCat () {
    const copyOfCats = cats.slice(0,-1);
    return copyOfCats;
}

function removeFirstCat () {
    const copyOfCats = cats.slice(1);
    return copyOfCats;
}
