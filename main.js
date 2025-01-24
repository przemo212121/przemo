

let res = require('readline')
let rl=res.createInterface({
    input:process.stdin,
    output:process.stdout
})

let krzak =["slon","trol"];
console.log(krzak.length);

console.log("Przemo");

let zmienna = rl.question("podaj zmienna\n", input1=>
{

    let krzak =["slon","trol"];
    
console.log("wprowadzono zmienna\n",  input1)
 if(input1 === "barca")
 {
    console.log("jestes fanem barcy")
 }
 else
 {
    return;
 }
    console.log("Koniec");

    rl.close();  // Zamykamy interfejs po zakończeniu

});









