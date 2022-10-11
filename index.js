// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(newCat) {
    cats.push(newCat);
}
function destructivelyPrependCat(newAddCat) {
    cats.unshift(newAddCat);
}
function destructivelyRemoveLastCat(noLastCat) {
    cats.pop(noLastCat);
}
function destructivelyRemoveFirstCat(noFirstCat) {
    cats.shift(noFirstCat);
}
function appendCat(anotherNewCat) {
    return [...cats, anotherNewCat];
}
function prependCat(name) {
    return [name, ...cats];
}
function removeLastCat(noLastNewCat) {
    return cats.slice(0, cats.length-1);
}
function removeFirstCat(noNewFirstCat) {
    return cats.slice(1);
}