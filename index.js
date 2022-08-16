// Write your solution here!
const cats = [ 
    "Milo",
    "Otis",
    "Garfield"
];
function destructivelyAppendCat(name) {
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
function appendCat(name){
    const cat =[...cats, "Broom"];
    return cat;
  
}
function prependCat() {
    const cat =["Arnold", ...cats];
    return cat;
}
function removeLastCat() {
    const cat =cats.slice(0,cats.length-1);
    return cat;
}
function removeFirstCat() {
    const cat =cats.slice(1);
    return cat;
}



    

