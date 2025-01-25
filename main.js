

let res = require('readline')
let rl=res.createInterface({
    input:process.stdin,
    output:process.stdout
})

let krzak =["slon","trol"];
console.log(krzak.length);

console.log("Przemo");
let dysk = ["dolina","krzy"];
console.log(dysk)
dysk.push("pies")
console.log(dysk)
dysk.splice(1,2)
console.log(dysk)
let zmienna = rl.question("podaj zmienna\n", (input1)=>
{

    let krzak =["slon","trol"];
    
console.log("wprowadzono zmienna\n",  input1)
 if(input1 === "barca")
 {
    console.log("jestes fanem barcy")
 }
 if(krzak[1]!==input1)
 {
    console.log("przejdz do warunku 3")
 }
 else
 {
    console.log("bye");
 }
    

    rl.close();  // Zamykamy interfejs po zakończeniu

});

rl.on('close',()=>
{
    
    console.log("dalszy ciag programu")
    return;
});









