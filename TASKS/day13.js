//array concepts
//loop method
let arr = [10,20,30,40,50];

for(i=0 ; i < 5 ; i++ )
{
    console.log(arr[i]);
}

//sum method using loop
let arr = [10,20,30,40,50];
let summ = 0;
for(let i = 0 ; i <arr.length ; i++)
{
    summ = summ + arr[i];
}

console.log ("sum =" ,summ);