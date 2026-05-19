//some tasks to recall .map fun();

let a = [1,2,3,4];

function newA(){
     
   let c = a.map((b)=>{
    return (
        b *2
    )});
    console.log(c)
}

newA();

//uppercase

let name= ["andy , dada , pipi"]

let uppercase = name.map((newname)=>{
 return newname.toUpperCase();
});

console.log(name);
console.log(uppercase);