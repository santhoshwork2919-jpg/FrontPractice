// let a = 10000;
// let b = 20000;

// function addd(){
//      c = a + b ;
//      return c;
// }

// let result = addd()
// console.log(result);

// function addd(n,m){
//     c = a+b;
//     return c ;

// }
// let a = 5000;
// let b = 5000;
// let result = addd()
// console.log(result);
let goats = 100 ;
let goatstotaldamage = 10 ;
let howmanygoatdamage = (goats/goatstotaldamage);

function find( howmanygoatdamage){
    if (howmanygoatdamage<= 5)
    {
        return "we need to refill the goat";
    }
    else
    {
        return "we have enough goat foo this week";
    }

};

console.log(find(howmanygoatdamage));