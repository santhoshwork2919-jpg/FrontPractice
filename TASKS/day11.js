//today i learn about scope chain

// let you can see my example code down below

let city = "coimbatore" ;//it is global scope 

function prediction()//function scope block
{
    let todaysweather = 38 ;
    if (todaysweather < 40 )//if else block
    {
        console.log(`${city} weather is hot. temperature :${todaysweather}` );
    }

    function stayinside()//nested funstion block
    {
        console.log(`${city} weather is hot ,stay inside the home and hydrate`)
    }
    stayinside();
    
}
prediction();

//CLOUSERS

function counterNUM()
{
    let count = 0;
    
    return function()
    {
      count = count +1;
      console.log(count)
    }
}
 
let counte = counterNUM();
counte();

// after exqutation of the glopal scope function the inside variable will deleded
// But , when create a function inside a function (nested function) with single varible 
// the variable never get deleted because the CLOUSER form a cloum arount that variable
// to help a nested function.