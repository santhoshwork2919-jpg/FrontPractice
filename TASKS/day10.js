// //pass by value and reference
function dhoni(){

let sport = 
{
    name : "cricket" ,
    useing : "ball and bat" ,
    totalplayers : 11

};
    return sport;
};
console.log(dhoni());

console.log(sport);

let diffSport = sport ;

console.log(diffSport);
diffSport.name = "football";

console.log(diffSport);


// call back function example
function sandy(add){
    add(150,150)

}
function santhosh(a,b){
    console.log(a+b);
}
sandy(santhosh);

